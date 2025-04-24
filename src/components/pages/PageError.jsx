import React from "react";
import { NavLink } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageError = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="text-center bg-gray-200 md:w-7xl mx-auto py-20">
        <h2>No Doctor Found!</h2>
        <p>No Doctor found with this registation number</p>
        <NavLink to={"/"}>
          {" "}
          <a className="btn mt-5 bg-[#176AE5] text-white rounded-3xl">
            View All Doctors
          </a>
        </NavLink>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PageError;
