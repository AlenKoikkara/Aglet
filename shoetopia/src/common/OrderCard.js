import React from "react";
import './OrderCard.scss';
import CartButton from "./CartButton";

import image from "../assets/images/banner.png";

const OrderCard = () => {
  return (
      <div className="orderCard">
        <div className="orderCartTitle">Order History</div>
        <div className="orderList">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="cartItem">
              <img className="cartImage" src={image} alt=""></img>
              <div className="cartBody">
                <div className="productName">
                  <a href={`/products/${item?.productId}`}>
                    Air Jordan{item?.productName}
                  </a>
                </div>
                <div className="productSize">Size: 10{item?.size}</div>
                <div className="productQty">Quantity: 3{item?.count}</div>
                <div className="productprice">$223{item?.listPrice}</div>
              </div>
              <div className="cartremovebutton">
                <CartButton
                  config={{ shoe: item, removeCart: true }}
                ></CartButton>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default OrderCard;
