import { React, useState, useEffect } from "react";

import "./NavBar.scss";

import HamburgerMenu from "./HamburgerMenu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import logo from "../assets/images/logo.png";
import profilepic from "../assets/images/profilepic.webp";
import utils from "../utils";
import LoginDialog from "./LoginDialog";

const NavBar = () => {
  const [show, handleShow] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navbarAnimation = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
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
        <img className="logo" src={logo} alt=""></img>
        {!utils.isMobile() && (
          <div className="navbarLinks">
            <div>Mens</div>
            <div>Womens</div>
            <div>Kids</div>
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
              {/* <img className="profilepic" src={profilepic} alt=""></img> */}
              <div onClick={() => handleClickOpen()} className="auth">
                Sign Up/In
              </div>
            </div>
          )}
        </div>
        <LoginDialog open={open} handleClose={handleClose}></LoginDialog>
      </div>
    </div>
  );
};

export default NavBar;
