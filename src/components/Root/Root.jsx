import React from "react";
import Home from "../Home/Home";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <Outlet>
          <Home></Home>
        </Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
