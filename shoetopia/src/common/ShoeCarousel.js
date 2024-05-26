import React, { useEffect, useState, useRef } from "react";

import "./ShoeCarousel.scss";
import axios from "../axios";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CartButton from "./CartButton";

function ShoeCarousel({ title, fetchUrl }) {
  const [shoes, setShoes] = useState();
  const scrollable = useRef(null);

  const scrollIt = (toRight) => {
    const scrollLength = 1000;
    scrollable.current.scrollBy({
      left: scrollLength * (toRight ? 1 : -1),
      behavior: "smooth",
    });
  };

  async function fetchData() {
    await axios
      .get(fetchUrl)
      .then((request) => {
        setShoes(request.data.products);
        return request;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="shoeCarouselWrapper">
      <div className="title">{title}</div>
      <ChevronLeftRoundedIcon
        onClick={() => scrollIt(false)}
        className="leftslide"
        fontSize="large"
      ></ChevronLeftRoundedIcon>
      <div className="shoeRows" ref={scrollable}>
        {shoes?.map((shoe) => (
          <div key={shoe._id} className="productWrapper">
            <div className="imgCart">
              <img
                loading="lazy"
                className="shoeimg"
                src={shoe.imageUrl}
                alt={shoe.producName}
              ></img>
              <CartButton shoe={shoe}></CartButton>
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
