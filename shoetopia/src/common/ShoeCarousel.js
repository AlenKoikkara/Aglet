import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, selectCart } from "../features/cartSlice";

import "./ShoeCarousel.scss";

import axios from "../axios";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import utils from "../utils";
import RemoveRounded from "@mui/icons-material/RemoveRounded";

function ShoeCarousel({ title, fetchUrl }) {
  const [shoes, setShoes] = useState();
  const scrollable = useRef(null);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

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

  function addCart(number, shoe) {
    utils.addtoCart(number, shoe, dispatch, cart);
  }

  function removeCart(user, shoe) {
    utils.removeFromCart(user, shoe, dispatch);
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
              <div className={`cartfunction ${utils.isProductInCart(shoe, cart) > -1 ?  'showcartfunction' : 'hidecartfunction'}`}>
                <RemoveRounded
                  className="removeCart"
                  fontSize="medium"
                  onClick={() => removeCart("123123", shoe)}
                ></RemoveRounded>
                <div className="totalItem">{utils.itemCountInCart(shoe, cart)}</div>
                <AddRoundedIcon
                  onClick={() => addCart("123123", shoe)}
                  className="addCart"
                  fontSize="medium"
                ></AddRoundedIcon>
              </div>
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
