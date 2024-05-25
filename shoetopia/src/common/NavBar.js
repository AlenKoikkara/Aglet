import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./NavBar.scss";

import HamburgerMenu from "./HamburgerMenu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import authFunctions from "../authFunctions";
import { selectUser } from "../features/userSlice";
import logo from "../assets/images/logo.png";
import profilepic from "../assets/images/profilepic.webp";
import utils from "../utils";
import LoginDialog from "./LoginDialog";

function NavBar({products, setProducts}) {
  const user = useSelector(selectUser);
  const [hide, handleHide] = useState(false);
  const [prevScrollpos , setPrevScrollpos] = useState(0)
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigateTo = (category) =>{
    navigate(utils.getUrlWithParams("/products?", {category: category}))
    if(products) {
      setProducts([])
    }
  }

  const navbarAnimation = () => {
    if (window.scrollY > prevScrollpos) {
      handleHide(true);
    } else {
      handleHide(false);
    }
    setPrevScrollpos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarAnimation);
    return () => window.removeEventListener("scroll", navbarAnimation);
  }, [prevScrollpos]);

  return (
    <div className={`navbarWrapper ${hide && "navfadeout"}`}>
      {utils.isMobile() && (
        <div className="navheader">
          <img className="logo" src={logo} alt=""></img>
        </div>
      )}
      <div className="wrapper">
        <img loading="lazy" className="logo" onClick={() => navigate("/")} src={logo} alt=""></img>
        {!utils.isMobile() && (
          <div className="navbarLinks">
            <div onClick={() => navigateTo('Men')} className="link">Men</div>
            <div onClick={() => navigateTo('Women')} className="link">Women</div>
            <div onClick={() => navigateTo('Kids')} className="link">Kids</div>
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
                <img className="profilepic" onClick={() => authFunctions.logoutUser(dispatch)} src={profilepic} alt=""></img>
              ) : (
                <div onClick={() => handleClickOpen()} className="auth">
                  Sign Up/In
                </div>
              )}
            </div>
          )}
        </div>
        <div style={{ display: "none" }}>
          <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
