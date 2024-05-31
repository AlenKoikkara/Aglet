import React from "react";
import './CartDrawer.scss';

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import CartButton from "./CartButton";


const CartDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const cart = useSelector(selectCart);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box role="presentation">
      <List>
        {cart?.map((item) => (
          <div className="cartItem">
            <img className="cartImage" src={item.imageUrl} alt=""></img>
            <div className="cartBody">
              <div className="productName">{item.productName}</div>
              <div className="productSize">{item.size}</div>
              <div className="productprice">${item.listPrice}</div>
            </div>
            <div>
              <CartButton config={{shoe: item, removeCart: true}}></CartButton>
            </div>
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <ShoppingBagOutlinedIcon
        onClick={toggleDrawer(true)}
        className="carticon"
        fontSize="large"
      ></ShoppingBagOutlinedIcon>
      {cart?.length > 0 && 
        <Drawer anchor="right" open={open}>
          {DrawerList}
        </Drawer>
      }
    </div>
  );
};

export default CartDrawer;
