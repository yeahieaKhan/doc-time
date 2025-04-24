import React from "react";
import CountUp from "react-countup";
import { MdOutlineEventNote } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { BiAccessibility } from "react-icons/bi";
import counterDocterImg from "../../assets/success-doctor.png";
import counterReviews from "../../assets/success-review.png";
import counterstaff from "../../assets/success-staffs.png";
import counterpatent from "../../assets/success-patients.png";

const Services = () => {
  return (
    <div className="md:w-7xl mx-auto md:py-30">
      <h2 className="text-center text-black font-bold">
        We Provide Best Medical Services
      </h2>
      <p className="text-center md:pb-10">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className="grid  grid-cols-2 md:grid-cols-4  gap-10 mx-auto px-5 py-10  items-center ">
        <div className="bg-gray-400 p-20 gap-2  ">
          <div>
            <img src={counterDocterImg} alt="" />
          </div>
          <div className="text-4xl font-bold">
            <CountUp end={199} duration={20} />
          </div>
          <div>
            <h2>Total Doctor</h2>
          </div>
        </div>
        <div className="bg-gray-400 p-20 ">
          <div className="block text-center justify-center items-center">
            <div>
              <img src={counterReviews} alt="" />
            </div>
          </div>
          <div className="text-3xl font-bold">
            <CountUp end={467} duration={20} />
          </div>
          <div>
            <h2>Total Review</h2>
          </div>
        </div>
        <div className="bg-gray-400 p-20  ">
          <div>
            <img src={counterstaff} alt="" />
          </div>
          <div className="font-black text-3xl">
            <CountUp end={1900} duration={20} />
          </div>
          <div>
            <h2>Patients</h2>
          </div>
        </div>
        <div className="bg-gray-400 p-20">
          <div>
            <img src={counterpatent} alt="" />
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
