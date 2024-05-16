import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./HamburgerMenu.scss";

import requests from "../requests";
import { selectUser } from "../features/userSlice";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginDialog from "./LoginDialog";

const HamburgerMenu = () => {
  const user = useSelector(selectUser);
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  }

  const handleClick = () => {
    const element = document.getElementById("hamburger");
    const navWrapper = document.getElementById("navWrapper");
    console.log(navWrapper);
    if (clicked === true) {
      element.classList.remove("open");
      element.classList.add("closed");
      navWrapper.classList.add("closenav");
      navWrapper.classList.remove("opened");
      setClicked(false);
    } else {
      element.classList.remove("closed");
      element.classList.add("open");
      navWrapper.classList.add("opened");
      navWrapper.classList.remove("closenav");
      setClicked(true);
    }
  };

  return (
    <>
      <div
        onClick={() => handleClick()}
        id="hamburger"
        class="hamburger closed"
      >
        <div class="burger-main">
          <div class="burger-inner">
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bot"></span>
          </div>
        </div>
        <div class="path-burger">
          <div class="animate-path">
            <div class="path-rotation"></div>
          </div>
        </div>
      </div>
      <div id="navWrapper" className="navWrapper closenav">
        <div className="blurfilterdiv"></div>
        <div className="navlink">
          <div className="profile">{user ? (
                <div className="profilepic" onClick={() => requests.logoutUser()}>Profile</div>
              ) : (
                <div onClick={() => handleClickOpen()} className="profile">
                  Sign Up/In
                </div>
              )}</div>
          <div className="mens">Mens</div>
          <div className="womens">Womens</div>
          <div className="kids">Kids</div>
          <ShoppingBagOutlinedIcon
            className="carticon "
            fontSize="large"
          ></ShoppingBagOutlinedIcon>
        </div>
        <div style={{ display: "none" }}>
          <LoginDialog open={open} handleClose={handleClose}></LoginDialog>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
