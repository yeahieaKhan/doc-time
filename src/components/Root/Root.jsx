import React from "react";
import Home from "../Home/Home";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
      </Outlet>
    </div>
  );
};

export default Root;
