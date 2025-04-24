import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import DoctorDetails from "../Doctors/DoctorDetails";
import Mybooking from "../MyBooking/Mybooking";
import Contact from "../pages/Contact";
import PageError from "../pages/PageError";
import Blogs from "../Blogs/Blogs";
import LoadingSpiner from "../pages/LoadingSpiner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageError></PageError>,
    children: [
      {
        index: true,
        loader: () => fetch("../doctors.json"),
        Component: Home,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
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
        loader: () => fetch("../blogs.json"),
        Component: Blogs,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

export default router;
