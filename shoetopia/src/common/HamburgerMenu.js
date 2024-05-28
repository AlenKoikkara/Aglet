import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./HamburgerMenu.scss";

import authFunctions from "../authFunctions";
import { selectUser } from "../features/userSlice";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginDialog from "./LoginDialog";
import utils from "../utils";

function HamburgerMenu ({config}) {
  const user = useSelector(selectUser);
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  }

  const navigateTo = (category) =>{
    navigate(utils.getUrlWithParams("/products?", {category: category}))
    if(config.products) {
      config.setProducts([])
    }
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
    <div className="hamburgerWrapper">
      <div
        onClick={() => handleClick()}
        id="hamburger"
        className="hamburger closed"
      >
        <div className="burger-main">
          <div className="burger-inner">
            <span className="top"></span>
            <span className="mid"></span>
            <span className="bot"></span>
          </div>
        </div>
        <div className="path-burger">
          <div className="animate-path">
            <div className="path-rotation"></div>
          </div>
        </div>
      </div>
      <div id="navWrapper" className="navWrapper closenav">
        <div className="blurfilterdiv"></div>
        <div className="navlink">
          <div className="mens">
            <div onClick={() => navigateTo("Men")} className="link">
              Shop men
            </div>
          </div>
          <div className="womens">
            <div onClick={() => navigateTo("Women")} className="link">
            Shop women
            </div>
          </div>
          <div className="kids">
            <div onClick={() => navigateTo("Kids")} className="link">
            Shop kids
            </div>
          </div>
        </div>
        <div style={{ display: "none" }}>
          <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
