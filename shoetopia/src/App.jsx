import React, { useEffect, lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login, selectUser } from "./features/userSlice";
// import HomePage from "./pages/HomePage";
// import CategoryPage from "./pages/CategoryPage";
// import ProductPage from "./pages/ProductPage";
// import UserPage from "./pages/UserPage";
import ProtectedRoutes from "./common/ProtectedRoutes";
import PageNotFound from "./common/PageNotFound";

const HomePage = lazy(() => import("./pages/HomePage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(
        login({
          userId: user.userId,
          emailId: user.emailId,
        })
      );
    }
    return () => {};
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<>loading...</>}>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/user/:id" element={<UserPage />} />
            </Route>
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/products" element={<CategoryPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
