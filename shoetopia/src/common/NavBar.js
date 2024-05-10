import { React, useState, useEffect } from "react";

import "./NavBar.scss";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import logo from "../assets/images/logo.png";
import profilepic from "../assets/images/profilepic.webp";
import HamburgerMenu from "./HamburgerMenu";
import utils from "../utils";

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
      {utils.isMobile() && <img className="logo" src={logo} alt=""></img>}
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
            // <img className="profilepic" src={profilepic} alt=""></img>
            <div onClick={() => handleClickOpen()} className="auth">
              Sign Up/In
            </div>
          )}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        
        <DialogContent className="dWrapper">
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <div className="dialogTitle">Login</div>
          <div className="dialogWrapper">
            <div className="dialogbanner">
              <img className="logo" src={logo} alt=""></img>
            </div>
            <div className="form">
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                id="name"
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              />
              <div className="signUpdirect">Don't have an account?</div>
              <div className="signUp">SignUp here.</div>
              <Button className="submitbutton" type="submit">Login</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavBar;
