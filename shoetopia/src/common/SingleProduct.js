import React from "react";
import "./SingleProduct.scss";

import StarIcon from "@mui/icons-material/Star";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import CartButton from "./CartButton";
import ShoeCarousel from "./ShoeCarousel";

function SingleProduct({ config }) {
  return (
    <div className="productWrapper">
      <div className="productFirstfold">
        <img
          className="productImg"
          src={config.singleProduct.imageUrl}
          alt=""
        ></img>
        <div className="productDescription">
          <div className="productTitle">
            <div className="productType">
              {config.singleProduct.division}s
            </div>
            <div className="productName">
              {config.singleProduct.productName}
            </div>
          </div>
          <div className="productBody">
            <div className="productPrice">
              ${config.singleProduct.listPrice}
            </div>
            <div className="productRating">
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
            <div className="productSizes">
              <div className="sizeTitle">Sizes</div>
              <div className="sizeList">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="sizeBox">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="productButtons">
              <div className="cartButton">
                <CartButton shoe={config.singleProduct}></CartButton>
              </div>
              <div className="buyNow">Buy Now</div>
            </div>
          </div>
        </div>
        <div className="productDetails">
          <ul>
            <li>
              <CheckCircleRoundedIcon></CheckCircleRoundedIcon>Regular fit
            </li>
            <li>
              <CheckCircleRoundedIcon></CheckCircleRoundedIcon>Lace Closure
            </li>
            <li>
              <CheckCircleRoundedIcon></CheckCircleRoundedIcon>Textile Lining
            </li>
            <li>
              <CheckCircleRoundedIcon></CheckCircleRoundedIcon>Soft Feel
            </li>
            <li>
              <CheckCircleRoundedIcon></CheckCircleRoundedIcon>Responsive Boost
            </li>
          </ul>
        </div>
      </div>
      <div className="productSecondfold">
        {config.featured && 
        <ShoeCarousel
          config={{ title: "Featured", shoes: config.featured }}
        ></ShoeCarousel>
        }
      </div>
    </div>
  );
}

export default SingleProduct;
