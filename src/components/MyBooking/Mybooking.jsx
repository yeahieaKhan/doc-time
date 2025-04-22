import React, { useEffect, useState } from "react";
import Doctor from "../Doctors/Doctor";
import { getFavorites } from "../Utilitys";

const Mybooking = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const savedDoctorLocalStorage = getFavorites();
    setDoctorData(savedDoctorLocalStorage);
  }, []);
  return (
    <div>
      <h2>my booking components</h2>
      <div className="grid md:grid-cols-3">
        {doctorData.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Mybooking;
