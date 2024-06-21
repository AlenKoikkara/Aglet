import React, { Suspense, useState, lazy } from "react";
import "./CartButton.scss";
import { useDispatch, useSelector } from "react-redux";

import { selectCart } from "../features/cartSlice";
import { selectUser } from "../features/userSlice";

import utils from "../utils";
import { Button, LinearProgress } from "@mui/material";

function CartButton({ config }) {
  const LoginDialog = lazy(() => import("./LoginDialog"));

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);

  function addCart() {
    if (user && config?.shoe?.size) {
      utils.addtoCart(user, config?.shoe, dispatch, cart);
    }

    if (user && !config?.shoe?.size) {
      alert("Please enter shoe size!!");
    }

    if (!user) {
      setOpen(true);
    }
  }

  function removeCart() {
    utils.removeFromCart(user?.userId, config?.shoe, dispatch);
  }

  return (
    <div className="cartfunction">
      {config?.addCart && (
        <Button className="addCart" onClick={() => addCart()}>
          Add to Cart
        </Button>
      )}
      {config?.removeCart && (
        <Button className="removeCart" onClick={() => removeCart()}>
          Delete
        </Button>
      )}
      <div style={{ display: "none" }}>
        <Suspense fallback={<LinearProgress />}>
          <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
        </Suspense>{" "}
      </div>
    </div>
  );
}

export default CartButton;
