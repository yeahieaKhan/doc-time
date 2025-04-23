import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import DoctorDetails from "../Doctors/DoctorDetails";
import Mybooking from "../MyBooking/Mybooking";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("../doctors.json"),
        Component: Home,
      },
      {
        path: "mybooking",
        Component: Mybooking,
      },
      {
        path: "doctordetails/:id",
        loader: () => fetch("../doctors.json"),
        Component: DoctorDetails,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

export default router;
