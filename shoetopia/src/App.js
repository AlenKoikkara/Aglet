import React, { useEffect } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

import CategoryPage from "./pages/CategoryPage";
import {login, logout, selectUser} from './features/userSlice'
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('usersigned in')
        dispatch(login({
          userId: user.uid,
          email: user.email
        }))
      } else {
        console.log('user signed out')
        dispatch(logout())
      }
    });
    return () => {
      
    }
  }, [dispatch])
  

  const router = createBrowserRouter([
    {
      path: `/products`,
      element: <CategoryPage></CategoryPage>,
    },
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "*",
      element: <Navigate to="/"></Navigate>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
