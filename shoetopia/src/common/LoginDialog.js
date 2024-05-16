import React, { useState } from "react";
import { useFormik } from "formik";

import "./LoginDialog.scss";
import logo from "../assets/images/logo.png";
import requests from "../requests";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function LoginDialog({ open, handleClose }) {
  const [isSignup, setIsSignup] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(values.password)
    ) {
      errors.password =
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
    }

    if (isSignup) {
      if (!values.confirmPassword && isSignup) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password does not match";
      }
    }
    return errors;
  };

  const formData = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      formData.setTouched(true);
      isSignup
        ? requests.registerUser(
            values.email,
            values.password,
            handleClose,
            formData
          )
        : requests.loginUser(
            values.email,
            values.password,
            handleClose,
            formData
          );
    },
  });

  const handleSignup = () => {
    setIsSignup(!isSignup);
    formData.setTouched(true);
    formData.resetForm();
  };

  const closeDialog = () => {
    formData.resetForm();
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={closeDialog}>
        <DialogContent className="dWrapper">
          <div className="dialogTitle"> {isSignup ? `Sign Up` : `Login`}</div>
          <div className="dialogWrapper">
            <div className="dialogbanner">
              <img className="logo" src={logo} alt=""></img>
            </div>
            <div className="form">
              <form onSubmit={formData.handleSubmit}>
                <TextField
                  margin="dense"
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  onBlur={formData.handleBlur}
                  value={formData.values.email}
                  onChange={formData.handleChange}
                />
                {formData.errors.email ? (
                  <div className="errorText">{formData.errors.email}</div>
                ) : null}
                <TextField
                  required
                  margin="dense"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  onBlur={formData.handleBlur}
                  value={formData.values.password}
                  onChange={formData.handleChange}
                />
                {formData.errors.password ? (
                  <div className="errorText">{formData.errors.password}</div>
                ) : null}

                {isSignup && (
                  <>
                    <TextField
                      required
                      margin="dense"
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirm Password"
                      type="confirmPassword"
                      fullWidth
                      variant="standard"
                      onBlur={formData.handleBlur}
                      value={formData.values.confirmPassword}
                      onChange={formData.handleChange}
                    />
                    {formData.errors.confirmPassword && isSignup ? (
                      <div className="errorText">
                        {formData.errors.confirmPassword}
                      </div>
                    ) : null}
                  </>
                )}
                <div className="signUpdirect">
                  {isSignup ? `Already a user?` : `Don't have an account?`}
                </div>
                <div className="signUp" onClick={() => handleSignup()}>
                  {isSignup ? `Login here.` : `SignUp here.`}
                </div>
                <Button
                  disabled={!(formData.isValid && formData.values)}
                  className="submitbutton"
                  type="submit"
                >
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
