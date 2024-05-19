import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const requests = {
  fetchProducts: (value) => `api/products?${value}`,
  fetchFeatured: `api/products/featured`,
  fetchUser: (userId) => `api/user/${userId}`,
  addUser: (userId) => `api/user/${userId}`,

  registerUser: async ( email, password, handleClose, formData ) => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log(authUser);
      formData.resetForm()
      handleClose()
    })
    .catch((error) => {
      alert(error.message);
    });
  },

  loginUser: async (email, password, handleClose, formData) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log(authUser);
      formData.resetForm()
      handleClose()
    })
    .catch((error) => {
      alert(error.message);
    })
  },

  logoutUser: async () => {
    signOut(auth)
    .then(() => {
      console.log('userSigned out')
    })
    .catch((error) => {
      console.log(error.message)
    })
  }
}


export default requests;