import React from "react";
import CountUp from "react-countup";
import { MdOutlineEventNote } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { BiAccessibility } from "react-icons/bi";

const Services = () => {
  return (
    <div className="md:w-7xl md:mx-auto md:py-30">
      <h2 className="text-center text-black font-bold">
        We Provide Best Medical Services
      </h2>
      <p className="text-center md:pb-10">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className="grid md:grid-cols-4 items-center ">
        <div className="bg-gray-400 p-20  w-72 h-60">
          <div>
            <MdOutlineEventNote size={50} />
          </div>
          <div className="text-4xl font-bold">
            <CountUp end={199} duration={20} />
          </div>
          <div>
            <h2>Total Doctor</h2>
          </div>
        </div>
        <div className="bg-gray-400 p-20  w-72 h-60 ">
          <div className="block text-center justify-center items-center">
            <div className="flex">
              {" "}
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <div className="flex">
              <CiStar />
              <CiStar />
            </div>
          </div>
          <div className="text-3xl font-bold">
            <CountUp end={467} duration={20} />
          </div>
          <div>
            <h2>Total Review</h2>
          </div>
        </div>
        <div className="bg-gray-400 p-20  w-72 h-60">
          <div>
            <FaUserDoctor size={50} />
          </div>
          <div className="font-black text-3xl">
            <CountUp end={1900} duration={20} />
          </div>
          <div>
            <h2>Patients</h2>
          </div>
        </div>
        <div className="bg-gray-400 p-20 w-72 h-60">
          <div>
            <BiAccessibility size={50} />
          </div>
          <div className="font-bold text-3xl">
            <CountUp end={300} duration={20} />
          </div>
          <div>
            <h2>Total Stuffs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
