import React, { useEffect, useMemo, useState } from "react";
import "./ProductsWrapper.scss";
import axios from "../axios";
import { useSearchParams } from "react-router-dom";

import CartButton from "./CartButton";

function ProductWrapper({ title, fetchUrl, products, setProducts }) {
  const [pageNo, setPageNo] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const page = useMemo(() => ({ pageNo }), [pageNo]);
  const [searchParams, setSearchParams] = useSearchParams();

  const scroller = () => {
    const scrolledTo = window.scrollY + window.innerHeight;
    const isReachBottom =
      Math.round(scrolledTo) < document.body.scrollHeight - 200 &&
      Math.round(scrolledTo) > document.body.scrollHeight - 250;
    if (isReachBottom) {
      setPageNo(pageNo + 1);
    }
  };

  async function fetchData(page) {
    const url = fetchUrl.concat(`&page=${page}`);
    await axios.get(url).then((request) => {
      setProducts([...products, ...request.data.products]);
      setProductCount(request.data.productCount);
      return request;
    })
    .catch((error) => {
      console.log(error.message)
    });
  }

  useEffect(() => {
    if (searchParams?.get("category") && products.length <= productCount) {
      fetchData(pageNo);
    }
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, [fetchUrl, page]);

  return (
    <>
      {products?.length > 0 && (
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
              {products?.map((product) => (
                <div key={product._id} className="productWrapper">
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
          </div>
        </div>
      )}
    </>
  );
}

export default ProductWrapper;
