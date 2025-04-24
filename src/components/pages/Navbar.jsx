import React from "react";
import logo from "../../assets/./logo.png";
import { Link, NavLink } from "react-router";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="w-7xl mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink to={"/mybooking"}>
                <li>
                  <a>My-Booing</a>
                </li>
              </NavLink>
              <NavLink to={"blogs"}>
                <li>
                  <a>Blogs</a>
                </li>
              </NavLink>
              <NavLink to={"contact"}>
                <li>
                  <a>Contact Us</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <div>
            <a className="flex justify-center items-center font-bold text-xl">
              <img src={logo} alt="doc time logo" />
              Doc-Time
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <NavLink to={"/"}>
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to={"/mybooking"}>
              <li>
                <a>My-Booing</a>
              </li>
            </NavLink>
            <NavLink to={"blogs"}>
              <li>
                <a>Blogs</a>
              </li>
            </NavLink>
            <NavLink to={"contact"}>
              <li>
                <a>Contact Us</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <a className="btn bg-[#176AE5] text-white rounded-3xl">Emergency</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
