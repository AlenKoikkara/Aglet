import React, { useEffect, useState } from "react";
import "./CategoryPage.scss";
import requests from "../requests";

import NavBar from "../common/NavBar";
import ProductWrapper from "../common/ProductWrapper";
import utils from "../utils";
import { useSearchParams } from "react-router-dom";

const CategoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("hekk")
  return (
    <div>
      <NavBar></NavBar>
      {searchParams?.get('category') && (
      <ProductWrapper
         title="Men"
         fetchUrl={requests.fetchProducts(
           `limit=20&category=Shoes&division=${searchParams?.get('category')}&productCount=20`
         )}
      ></ProductWrapper>
      )}
    </div>
  );
};

export default CategoryPage;
