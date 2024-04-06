import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

/*
 * Header
 * -- Logo
 * -- Nav Items
 * Body
 * -- Search
 * -- RestaurantContainer
 *    -- RestaurantCard
 *         --- Img
 *         --- Name of res, rating
 * Footer
 * -- Copyright
 * -- Links
 * -- Address
 * -- Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
