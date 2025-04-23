import React from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4 list-none font-bold">
          <NavLink to={"/"}>
            {" "}
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to={"/mybooking"}>
            {" "}
            <li>
              <a>My-Booking</a>
            </li>
          </NavLink>
          <NavLink to={"/blogs"}>
            <li>
              <a>Blogs</a>
            </li>
          </NavLink>
          <NavLink to={"contact"}>
            <li>
              <a>Contact Us</a>
            </li>
          </NavLink>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 text-4xl">
            <a
              href="https://www.facebook.com/yeahieaKhan83"
              target="_blank"
              className="text-[#1877F2]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/yeahiea-khan-a2a001251/"
              target="_blank"
              className="text-[#0A66C2]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yeahieaKhan"
              target="_blank"
              className="text-[#171515]"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
