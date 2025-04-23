import React from "react";
import { Link, NavLink } from "react-router";

const EmptyState = () => {
  return (
    <div>
      {" "}
      <div className="border w-7xl mx-auto mt-10 p-14 text-center">
        <h2 className="text-2xl font-bold text-gray-500">
          No booking data found
        </h2>
        <NavLink to={"/"}>
          <button className="btn btn-success cursor-pointer">Booking</button>
        </NavLink>
      </div>
    </div>
  );
};

export default EmptyState;
