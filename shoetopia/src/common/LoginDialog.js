import React, { useState } from "react";
import { useFormik } from "formik";

import "./LoginDialog.scss";
import logo from "../assets/images/logo.png";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function LoginDialog({ open, handleClose }) {
  const [isSignup, setIsSignup] = useState(false);

  const formData = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="dWrapper">
          <div className="dialogTitle"> {isSignup ? `Sign Up` : `Login`}</div>
          <div className="dialogWrapper">
            <div className="dialogbanner">
              <img className="logo" src={logo} alt=""></img>
            </div>
            <div className="form">
              <form onSubmit={formData.handleSubmit}>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  value={formData.values.email}
                  onChange={formData.handleChange}
                />
                <TextField
                  required
                  margin="dense"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  value={formData.values.password}
                  onChange={formData.handleChange}
                />
                {isSignup && (
                  <TextField
                    required
                    margin="dense"
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="confirmPassword"
                    fullWidth
                    variant="standard"
                    value={formData.values.confirmPassword}
                    onChange={formData.handleChange}
                  />
                )}
                <div className="signUpdirect">
                  {isSignup ? `Already a user?` : `Don't have an account?`}
                </div>
                <div className="signUp" onClick={() => setIsSignup(!isSignup)}>
                  {isSignup ? `Login here.` : `SignUp here.`}
                </div>
                <Button className="submitbutton" type="submit">
                  {isSignup ? `Sign Up` : `Login`}
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LoginDialog;
