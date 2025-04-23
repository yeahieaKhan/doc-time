import React from "react";
import CountUp from "react-countup";

const Services = () => {
  return (
    <div className="w-7xl mx-auto py-30">
      <h2 className="text-center font-black font-bold">
        We Provide Best Medical Services
      </h2>
      <p className="text-center pb-10">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className="grid md:grid-cols-4 items-center">
        <div className="bg-gray-400 p-20">
          <div>Icons</div>
          <div className="text-4xl">
            <CountUp end={199} duration={20} />
          </div>
          <div>
            <h2>Total Doctor</h2>
          </div>
        </div>
        <div className="bg-gray-400 p-20">
          <div>Icons</div>
          <div>
            <CountUp end={199} duration={20} />
          </div>
          <div>
            <h2>Total Doctor</h2>
          </div>
        </div>
        <div className="bg-gray-400 p-20">
          <div>Icons</div>
          <div>
            <CountUp end={199} duration={20} />
          </div>
          <div>
            <h2>Total Doctor</h2>
          </div>
        </div>
        <div className="bg-gray-400 p-20">
          <div>Icons</div>
          <div>
            <CountUp end={199} duration={20} />
          </div>
          <div>
            <h2>Total Doctor</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
