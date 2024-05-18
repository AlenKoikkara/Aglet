import React, { useEffect, useMemo, useState } from "react";
import "./ProductWrapper.scss";
import axios from "../axios";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useSearchParams } from "react-router-dom";

function ProductWrapper({ title, fetchUrl }) {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const page = useMemo(() => ({pageNo}), [pageNo])
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category')

  const scroller = () => {
    const scrolledTo = window.scrollY + window.innerHeight;
    const isReachBottom =
      Math.round(scrolledTo) < document.body.scrollHeight - 200 &&
      Math.round(scrolledTo) > document.body.scrollHeight - 250;
    // console.log(scrolledTo, document.body.scrollHeight)
    if (isReachBottom) {
      setPageNo(pageNo + 1);
    }
  };

  async function fetchData(page) {
    const url = fetchUrl.concat(`&page=${page}`);
    await axios.get(url).then((request) => {
      setProducts([...products, ...request.data.products]);
      setPageCount(request.data.pageCount);
      return request;
    });
  }

  useEffect(() => {
    if (searchParams?.get("category")) {
      fetchData(pageNo);
    }
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, [fetchUrl, page, category]);

  return (
    <div className="categoryWrapper">
      <div className="titleContent">
        <div className="title">{title}'s Shoes</div>
        <div className="filterOptions">
          <div className="hideFilter">HideFilter</div>
          <div className="sortByDropdown">Dropdown menu</div>
        </div>
      </div>
      <div className="content">
        {products && (
          <div className="productsList">
            {products?.map((product) => (
              <div key={product._id} className="productWrapper">
                <div className="imgCart">
                  <img
                    onClick={() => console.log("clicked")}
                    className="shoeimg"
                    src={product.imageUrl}
                    alt={product.producName}
                  ></img>
                  <AddRoundedIcon
                    onClick={() => console.log("cartclicked")}
                    className="addCart"
                    fontSize="medium"
                  ></AddRoundedIcon>
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
        )}
      </div>
    </div>
  );
}

export default ProductWrapper;
