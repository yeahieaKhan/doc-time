// import React from "react";
// import { createBrowserRouter } from "react-router";
// import Root from "../Root/Root";
// import Home from "../Home/Home";
// import DoctorDetails from "../Doctors/DoctorDetails";
// import Mybooking from "../MyBooking/Mybooking";
// import Contact from "../pages/Contact";
// import PageError from "../pages/PageError";
// import Blogs from "../Blogs/Blogs";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Root,
//     errorElement: <PageError></PageError>,
//     children: [
//       {
//         index: true,
//         loader: () => fetch("../doctors.json"),
//         Component: Home,
//       },
//       {
//         path: "mybooking",
//         Component: Mybooking,
//       },
//       {
//         path: "doctordetails/:id",
//         loader: () => fetch("../doctors.json"),
//         Component: DoctorDetails,
//       },
//       {
//         path: "blogs",
//         loader: () => fetch("../blogs.json"),
//         Component: Blogs,
//       },
//       {
//         path: "contact",
//         Component: Contact,
//       },
//     ],
//   },
// ]);

// export default router;

// src/routes/router.js
import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import DoctorDetails from "../Doctors/DoctorDetails";
import Mybooking from "../MyBooking/Mybooking";
import Contact from "../pages/Contact";
import PageError from "../pages/PageError";
import Blogs from "../Blogs/Blogs";

const loadDoctorsData = async () => {
  const res = await fetch("../doctors.json");
  return await res.json();
};

const loadBlogsData = async () => {
  const res = await fetch("../blogs.json");
  return await res.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageError></PageError>,
    children: [
      {
        index: true,
        loader: loadDoctorsData,
        Component: Home,
      },
      {
        path: "mybooking",
        Component: Mybooking,
      },
      {
        path: "doctordetails/:id",
        loader: loadDoctorsData,
        Component: DoctorDetails,
      },
      {
        path: "blogs",
        loader: loadBlogsData,
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
