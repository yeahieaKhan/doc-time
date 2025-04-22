import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("doctors.json"),
        Component: Home,
      },
    ],
  },
]);

export default router;
