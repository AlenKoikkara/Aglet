import React, { useEffect, lazy, Suspense } from "react";
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

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("usersigned in");
        dispatch(
          login({
            userId: user.uid,
            email: user.email,
          })
        );
      } else {
        console.log("user signed out");
        dispatch(logout());
      }
    });
    return () => {};
  }, [dispatch]);

  const router = createBrowserRouter([
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
