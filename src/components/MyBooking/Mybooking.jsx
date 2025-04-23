import React, { useEffect, useState } from "react";

import { getFavorites, removeFavorite } from "../Utilitys";
import BookingView from "./BookingView";

const Mybooking = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const savedDoctorLocalStorage = getFavorites();
    setDoctorData(savedDoctorLocalStorage);
  }, []);
  const handleCanleAppoinment = (id) => {
    removeFavorite(id);
    setDoctorData(getFavorites());
    alert("Cancle");
  };
  return (
    <div>
      <h2>my booking components</h2>
      <div>
        {doctorData.map((doctor) => (
          <BookingView
            key={doctor.id}
            doctor={doctor}
            handleCanleAppoinment={handleCanleAppoinment}
          ></BookingView>
        ))}
      </div>
    </div>
  );
};

export default Mybooking;
