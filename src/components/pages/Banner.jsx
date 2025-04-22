import React from "react";
import BannerImg from "../../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div className="md:w-7xl mx-auto py-20">
      <div>
        <h2 className="text-center md:text-4xl text-xl font-bold text-black">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h2>
        <p className="text-center mt-10 px-5">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.Whether it's a <br />
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
        <div className="md:w-5xl mx-auto mt-10">
          <form className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24 gap-3">
            <input
              type="text"
              placeholder="Search  any doctor"
              className="bg-white border border-gray-600 p-5 rounded w-2/3  h-12 px-4 mb-4 md:mb-2"
            />
            <button className="relative inline-block text-lg group cursor-pointer">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Search Now</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </form>
              </div>
              <div></div>
      </div>
    </div>
  );
};

export default Banner;
