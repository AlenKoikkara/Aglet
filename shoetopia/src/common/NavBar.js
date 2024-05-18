import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./NavBar.scss";

import HamburgerMenu from "./HamburgerMenu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import requests from "../requests";
import { selectUser } from "../features/userSlice";
import logo from "../assets/images/logo.png";
import profilepic from "../assets/images/profilepic.webp";
import utils from "../utils";
import LoginDialog from "./LoginDialog";
import { NavLink } from "react-router-dom";
import { replace } from "formik";

const NavBar = () => {
  const user = useSelector(selectUser);
  const [searchParams, setSearchParams] = useState();
  const [show, handleShow] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  }

  const navbarAnimation = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    setSearchParams(utils.getQueryParams());
    window.addEventListener("scroll", navbarAnimation);
    return () => window.removeEventListener("scroll", navbarAnimation);
  }, []);

  return (
    <div className={`navbarWrapper ${show && "navfadein"}`}>
      {utils.isMobile() && (
        <div className="navheader">
          <img className="logo" src={logo} alt=""></img>
        </div>
      )}
      <div className="wrapper">
        <img className="logo" onClick={() => navigate("/")} src={logo} alt=""></img>
        {!utils.isMobile() && (
          <div className="navbarLinks">
            <div onClick={() => navigate(utils.getUrlWithParams("/products?", {category: 'Men'}), {replace: true})} className="link">Men</div>
            <div onClick={() => navigate(utils.getUrlWithParams("/products?", {category: 'Women'}), {replace: true})} className="link">Women</div>
            <div onClick={() => navigate(utils.getUrlWithParams("/products?", {category: 'Kids'}))} className="link">Kids</div>
          </div>
        )}
        <div className="profileicon">
          {utils.isMobile() ? (
            <HamburgerMenu></HamburgerMenu>
          ) : (
            <div className="rightsideContent">
              <ShoppingBagOutlinedIcon
                className="carticon"
                fontSize="large"
              ></ShoppingBagOutlinedIcon>
              {user ? (
                <img className="profilepic" onClick={() => requests.logoutUser()} src={profilepic} alt=""></img>
              ) : (
                <div onClick={() => handleClickOpen()} className="auth">
                  Sign Up/In
                </div>
              )}
            </div>
          )}
        </div>
        <div style={{ display: "none" }}>
          <LoginDialog open={open} handleClose={handleClose}></LoginDialog>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
