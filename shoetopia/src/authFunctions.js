import { auth } from "./firebase";
import axios from "./axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { login, logout } from "./features/userSlice";
import requests from "./requests";

const authFunctions = {
  registerUser: async ( email, password, handleClose, formData, dispatch ) => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(async (authUser) => {
      await axios.post(requests.addUser(authUser.user.uid).concat(`?emailId=${authUser.user.email}`)).then((user) => {
        dispatch(login(user.data));
        localStorage.setItem("user", JSON.stringify(user.data));
        formData.resetForm()
        handleClose()
      })
    })
    .catch((error) => {
      alert(error.message);
    });
  },

  loginUser: async (email, password, handleClose, formData, dispatch) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then(async (authUser) => {
      await axios.get(requests.fetchUser(authUser.user.uid)).then((user) => {
        dispatch(login(user.data));
        localStorage.setItem("user", JSON.stringify(user.data));
        formData.resetForm()
        handleClose()
      })
      formData.resetForm()
      handleClose()
    })
    .catch((error) => {
      alert(error.message);
    })
  },

  logoutUser: async (dispatch) => {
    signOut(auth)
    .then(() => {
      dispatch(logout())
      localStorage.removeItem("user");
      console.log('userSigned out')
    })
    .catch((error) => {
      console.log(error.message)
    })
  }
}

export default authFunctions;
