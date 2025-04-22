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
      <h2 className="text-center text-3xl">Doctors components</h2>
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
