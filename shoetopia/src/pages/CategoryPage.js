import React, {useState, useEffect} from "react";
import "./CategoryPage.scss";
import requests from "../requests";

import NavBar from "../common/NavBar";
import ProductWrapper from "../common/ProductWrapper";
import { useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom'; // Assuming you're using React Router

const CategoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  useEffect(() => {

    setProducts([])
    return () => {
      
    }
  }, [location.search])
  
  return (
    <div>
      <NavBar
      products={products}
      setProducts={setProducts}>
      </NavBar>
      {searchParams?.get('category') && (
      <ProductWrapper
         title={searchParams?.get('category')}
         fetchUrl={requests.fetchProducts(
           `limit=20&category=Shoes&division=${searchParams?.get('category')}&productCount=20`
         )}
         products={products}
         setProducts={setProducts}
      ></ProductWrapper>
      )}
    </div>
  );
};

export default CategoryPage;
