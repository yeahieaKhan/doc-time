import React from "react";
import errorImg from "../../assets/error404.png";
import { NavLink } from "react-router";

const Contact = () => {
  return (
    <div className="text-center md:flex px-10 justify-center mt-30">
      <div>
        <img src={errorImg} alt="" />
        <div>
          <NavLink to={"/"}>
            {" "}
            <a className="btn mt-5 bg-[#176AE5] text-white rounded-3xl">
              Go Bact Home
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
