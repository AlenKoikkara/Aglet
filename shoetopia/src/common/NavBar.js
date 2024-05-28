import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./NavBar.scss";

import HamburgerMenu from "./HamburgerMenu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FaceIcon from "@mui/icons-material/Face";
import authFunctions from "../authFunctions";
import { selectUser } from "../features/userSlice";
import logo from "../assets/images/logo.png";
import utils from "../utils";
import LoginDialog from "./LoginDialog";

function NavBar({ products, setProducts }) {
  const user = useSelector(selectUser);
  const [hide, handleHide] = useState("top");
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navbarAnimation = () => {
    if (window.scrollY > prevScrollpos) {
      handleHide("navfadeout");
    } else {
      handleHide("navfadein");
    }
    setPrevScrollpos(window.scrollY);
    if (prevScrollpos < 50) {
      handleHide("top");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarAnimation);
    return () => window.removeEventListener("scroll", navbarAnimation);
  }, [prevScrollpos]);

  return (
    <div className={`navbarWrapper ${hide}`}>
      <div className="wrapper">
        <div className="menuandlogo">
          <div className="navHamburger">
            <HamburgerMenu
              config={{ products: products, setProducts: setProducts }}
              products={products}
              setProducts={setProducts}
            ></HamburgerMenu>
          </div>
          <img
            loading="lazy"
            className="logo"
            onClick={() => navigate("/")}
            src={logo}
            alt=""
          ></img>
        </div>
        <div className="rightsideContent">
          <ShoppingBagOutlinedIcon
            className="carticon"
            fontSize="large"
          ></ShoppingBagOutlinedIcon>
          {user?.emailId ? (
            <div
              onClick={() => authFunctions.logoutUser(dispatch)}
              className="auth"
            >
              <div className="profile" fontSize="large">
                {utils.getUserInitial(user?.emailId)}
              </div>
            </div>
          ) : (
            <div onClick={() => handleClickOpen()} className="auth">
              <FaceIcon className="login" fontSize="large"></FaceIcon>
            </div>
          )}
        </div>
        <div style={{ display: "none" }}>
          <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
