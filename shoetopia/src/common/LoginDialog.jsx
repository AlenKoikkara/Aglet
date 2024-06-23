import React, { useState } from "react";
import { useFormik } from "formik";

import "./LoginDialog.scss";
import  authFunctions  from "../authFunctions";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import LoginForm from "./LoginForm";

function LoginDialog({ open, setOpen }) {
  
  function handleClose() {
    setOpen(false);
  }

  
  

  const closeDialog = () => {
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={closeDialog}>
        <LoginForm handleClose={handleClose}></LoginForm>
      </Dialog>
    </div>
  );
}

export default LoginDialog;
