import React, { useEffect, useState } from "react";

import { getFavorites, removeFavorite } from "../Utilitys";
import BookingView from "./BookingView";
import { toast } from "react-toastify";

const Mybooking = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const savedDoctorLocalStorage = getFavorites();
    setDoctorData(savedDoctorLocalStorage);
  }, []);
  const handleFavorite = (id, name) => {
    removeFavorite(id);
    setDoctorData(getFavorites());
    toast.success(`Booking Cancle ${name}`);
  };
  return (
    <div>
      <h2>my booking components</h2>
      <div>
        {doctorData.map((doctor) => (
          <BookingView
            key={doctor.id}
            doctor={doctor}
            handleFavorite={handleFavorite}
          ></BookingView>
        ))}
      </div>
    </div>
  );
};

export default Mybooking;
