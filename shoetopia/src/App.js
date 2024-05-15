import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import HomePage from "./pages/HomePage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const router = createBrowserRouter([
    {
      path: '/mens',
      element: <CategoryPage></CategoryPage>
    },
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
  ]);

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
