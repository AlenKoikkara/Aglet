import { React, useState, useEffect } from "react";

import "./NavBar.scss";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import logo from "../assets/images/logo.png";
import profilepic from "../assets/images/profilepic.webp";
import HamburgerMenu from "./HamburgerMenu";
import utils from "../utils";

const NavBar = () => {
  const [show, handleShow] = useState(true);

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
      {utils.isMobile() && <img className="logo" src={logo} alt=""></img>}
      <div className="wrapper">
        <img className="logo" src={logo} alt=""></img>
        {utils.isMobile() && (
          <HomeOutlinedIcon
            className="homeicon"
            fontSize="medium"
          ></HomeOutlinedIcon>
        )}
        {!utils.isMobile() && (
          <div className="navbarLinks">
            <div>Mens</div>
            <div>Womens</div>
            <div>Kids</div>
          </div>
        )}
        <div className="profile">
          {utils.isMobile() ? (
            <HamburgerMenu></HamburgerMenu>
          ) : (
            <img className="profilepic" src={profilepic} alt=""></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
