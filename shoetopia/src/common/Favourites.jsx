import React, { useEffect, useState } from "react";
import "./Favourites.scss";
import { useNavigate } from "react-router-dom";

function Favourites({ config }) {
  const [products, setProducts] = useState()
  const navigate = useNavigate();
  
  function navigateTo(productId) {
    navigate(`/product/${productId}`);
  }

  function fetchFav() {
    
  }

  useEffect(() => {
  }, []);

  return (
    <>
      {true && (
        <div className="categoryWrapper">
          <div className="titleContent">
            <div className="title">Favourites</div>
          </div>
          <div className="content">
            <div className="productsList">
              {products?.map((product) => (
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
          </div>
        </div>
      )}
    </>
  );
}

export default Favourites;
