import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";

const Doctors = ({ doctors }) => {
  console.log(doctors);
  const [doctorData, setDoctorData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  console.log(doctorData);
  useEffect(() => {
    if (showAll) {
      setDoctorData(doctors);
    } else {
      setDoctorData(doctors.slice(0, 6));
    }
  }, [doctors, showAll]);

  return (
    <div className="md:w-7xl mx-auto">
      <h2 className="text-center text-3xl">Our Best Doctors</h2>
      <p className="text-center pb-10">
        At our clinic, we are proud to feature a team of the most dedicated,
        <br />
        experienced, and compassionate medical professionals. <br />
        Each doctor is highly trained, bringing years of expertise and a deep
        commitment to patient care.
      </p>
      <div className="grid md:grid-cols-3">
        {doctorData.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowAll((pre) => !pre)}
          className="btn btn-info"
        >
          {showAll ? "Show less" : "View All Doctors"}
        </button>
      </div>
    </div>
  );
};

export default Doctors;
