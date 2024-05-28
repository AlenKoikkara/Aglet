import React, {useState, useEffect, lazy, Suspense} from "react";
import "./CategoryPage.scss";
import requests from "../requests";

import NavBar from "../common/NavBar";
// import ProductWrapper from "../common/ProductWrapper";
import { useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { LinearProgress } from "@mui/material";

const CategoryPage = () => {
  const ProductWrapper = lazy(() => import('../common/ProductWrapper'));

  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  useEffect(() => {

    setProducts([])
    return () => {
      
    }
  }, [location.search])
  
  return (
    <div className="body">
      <NavBar
      products={products}
      setProducts={setProducts}>
      </NavBar>
      {searchParams?.get('category') && (
        <Suspense fallback={<LinearProgress />}>
          <ProductWrapper
             title={searchParams?.get('category')}
             fetchUrl={requests.fetchProducts(
               `limit=20&category=Shoes&division=${searchParams?.get('category')}&productCount=20`
             )}
             products={products}
             setProducts={setProducts}
          ></ProductWrapper>
        </Suspense>
      )}
    </div>
  );
};

export default CategoryPage;
