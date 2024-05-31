import React, { useEffect } from "react";
import "./App.scss";
import { onAuthStateChanged } from "firebase/auth";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import utils from "./utils";
import { removeCart } from "./features/cartSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("usersigned in");
        dispatch(
          login({
            userId: user.uid,
            emailId: user.email,
          })
        );
        utils.getCart(user.uid, dispatch)
      } else {
        // console.log("user signed out");
        dispatch(logout());
        dispatch(removeCart([]))
      }
    });
    return () => {};
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/products/:id",
      async lazy() {
        let ProductPage = await import("./pages/ProductPage");
        return { Component: ProductPage.default };
      },
    },
    {
      path: "/products",
      async lazy() {
        let CategoryPage = await import("./pages/CategoryPage");
        return { Component: CategoryPage.default };
      },
    },
    {
      path: "/",
      async lazy() {
        let HomePage = await import("./pages/HomePage");
        return { Component: HomePage.default };
      }
    },
    {
      path: "*",
      element: <Navigate to="/"></Navigate>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
