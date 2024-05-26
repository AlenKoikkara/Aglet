import React, { useState } from "react";
import "./CartButton.scss";
import { useDispatch, useSelector } from "react-redux";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";

import { selectCart } from "../features/cartSlice";
import { selectUser } from "../features/userSlice";
import LoginDialog from "../common/LoginDialog";

import utils from "../utils";

function CartButton({ shoe }) {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);

  function addCart() {
    if (user) {
      utils.addtoCart(user?.userId, shoe, dispatch, cart);
    } else {
      setOpen(true);
    }
  }

  function removeCart() {
    utils.removeFromCart(user?.userId, shoe, dispatch);
  }

  return (
    <div
      className={`cartfunction ${
        cart?.length &&
        (utils?.isProductInCart(shoe, cart) > -1
          ? "showcartfunction"
          : "hidecartfunction")
      }`}
    >
      <RemoveRounded
        className="removeCart"
        fontSize="medium"
        onClick={() => removeCart()}
      ></RemoveRounded>
      <div className="totalItem">
        {cart?.length && utils.itemCountInCart(shoe, cart)}
      </div>
      <AddRoundedIcon
        onClick={() => addCart()}
        className="addCart"
        fontSize="medium"
      ></AddRoundedIcon>
      <div style={{ display: "none" }}>
        <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
      </div>
    </div>
  );
}

export default CartButton;
