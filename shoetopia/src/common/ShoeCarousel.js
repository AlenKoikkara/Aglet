import React, { useRef } from "react";

import "./ShoeCarousel.scss";
import { useNavigate } from "react-router-dom";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CartButton from "./CartButton";
import utils from "../utils";

function ShoeCarousel({ config }) {
  const scrollable = useRef(null);
  const navigate = useNavigate();

  const scrollIt = (toRight) => {
    const scrollLength = 1000;
    scrollable.current.scrollBy({
      left: scrollLength * (toRight ? 1 : -1),
      behavior: "smooth",
    });
  };

  function navigateTo(productId) {
    navigate(`/products/${productId}`);
  }

  return (
    <div className="shoeCarouselWrapper">
      <div className="title">{config?.title}</div>
      <ChevronLeftRoundedIcon
        onClick={() => scrollIt(false)}
        className="leftslide"
        fontSize="large"
      ></ChevronLeftRoundedIcon>
      <div className="shoeRows" ref={scrollable}>
        {config.shoes?.map((shoe) => (
          <div
            onClick={() => navigateTo(shoe._id)}
            key={shoe._id}
            className="productWrapper"
          >
            <div className="imgCart">
              <img
                loading="lazy"
                className="shoeimg"
                src={shoe.imageUrl}
                alt={shoe.producName}
              ></img>
              <div className="cartButton">
                <CartButton shoe={shoe}></CartButton>
              </div>{" "}
            </div>
            <div className="shoedetails">
              <div className="desc">
                <div className="productname">{shoe.productName}</div>
                <div className="division">{shoe.division}</div>
              </div>
              <div className="price">${shoe.listPrice}</div>
            </div>
          </div>
        ))}
      </div>
      <ChevronRightRoundedIcon
        onClick={() => scrollIt(true)}
        className="rightslide"
        fontSize="large"
      ></ChevronRightRoundedIcon>
    </div>
  );
}

export default ShoeCarousel;
