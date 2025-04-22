import React from "react";
import Doctor from "./Doctor";

const Doctors = ({ doctors }) => {
  console.log(doctors);
  return (
    <div className="md:w-7xl mx-auto">
      <h2 className="text-center text-3xl">Doctors components</h2>
      <div className="grid md:grid-cols-3">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-info">View All Doctors</button>
      </div>
    </div>
  );
};

export default Doctors;
