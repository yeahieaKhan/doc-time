import React from "react";

import { NavLink } from "react-router";

const Contact = () => {
  return (
    <div className="text-center md:flex px-10 justify-center mt-30">
      <div>
        <h2>sohag</h2>
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
