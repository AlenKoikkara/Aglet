import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";

import "./NavBar.scss";

import HamburgerMenu from "./HamburgerMenu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { auth } from "../firebase";
import { selectUser, logout } from "../features/userSlice";
import logo from "../assets/images/logo.png";
import profilepic from "../assets/images/profilepic.webp";
import utils from "../utils";
import LoginDialog from "./LoginDialog";

const NavBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [show, handleShow] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  }

  const logOut = () => {
    signOut(auth)
    .then(() => {
      // dispatch(logout())
      console.log('userSigned out')
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

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
              {user ? (
                <img className="profilepic" onClick={() => logOut()} src={profilepic} alt=""></img>
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
