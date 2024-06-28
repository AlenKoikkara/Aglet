import React, { useCallback, useEffect } from "react";
import "./ProductsWrapper.scss";
import { usePaginatedTransactions } from "../hooks/paginatedData";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function ProductWrapper({ title }) {
  const {
    data: products,
    loading,
    ...productsUtils
  } = usePaginatedTransactions();
  const navigate = useNavigate();

  const scroller = () => {
    const scrolledTo = window.scrollY + window.innerHeight;
    var isReachBottom =
      Math.round(scrolledTo) < document.body.scrollHeight - 200 &&
      Math.round(scrolledTo) > document.body.scrollHeight - 250;
    if (isReachBottom) {
      if (products.nextPage) {
        window.removeEventListener("scroll", scroller);
        fetchPaginatedData();
      }
    }
  };

  const fetchPaginatedData = useCallback(async () => {
    productsUtils.fetchAll();
  }, [productsUtils]);

  function navigateTo(productId) {
    navigate(`/product/${productId}`);
  }

  useEffect(() => {
    if (products === null) {
      fetchPaginatedData();
    }
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, [products]);

  return (
    <>
      {true && (
        <div className="categoryWrapper">
          <div className="titleContent">
            <div className="title">{title}'s Shoes</div>
            {/* <div className="filterOptions">
              <div className="hideFilter">HideFilter</div>
              <div className="sortByDropdown">Dropdown menu</div>
            </div> */}
          </div>
          <div className="content">
            <div className="productsList">
              {products?.products?.map((product) => (
                <div
                  key={product._id}
                  className="productWrapper"
                  onClick={() => navigateTo(product._id)}
                >
                  <div className="imgCart">
                    <img
                      loading="lazy"
                      className="shoeimg"
                      src={product.imageUrl}
                      alt={product.producName}
                    ></img>
                  </div>
                  <div className="shoedetails">
                    <div className="desc">
                      <div className="productname">{product.productName}</div>
                      <div className="division">{product.division}</div>
                    </div>
                    <div className="price">${product.listPrice}</div>
                  </div>
                </div>
              ))}
            </div>
            {loading && (
              <CircularProgress
                className="circularProgress"
                fontSize="small"
              ></CircularProgress>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductWrapper;
