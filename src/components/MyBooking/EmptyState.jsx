import React from "react";
import { Link, NavLink } from "react-router";

const EmptyState = () => {
  return (
    <div>
      {" "}
      <div className="md:w-7xl mx-auto mt-10 p-14 text-center">
        <h2 className="text-2xl font-bold text-gray-500">
          You have not booked any appoinmnet yet
        </h2>
        <p className="py-20">
          Our platform connects you with verifield, exprience doctors and
          accross various specailes -- all at your conveni ence
        </p>
        <NavLink to={"/"}>
          <button className="btn bg-[#176AE5] text-white cursor-pointer">
            Book an Appoinment
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default EmptyState;
