import React, { useEffect, useState } from "react";
import RechartForBooking from "./RechartForBooking";

import { getFavorites, removeFavorite } from "../Utilitys";
import BookingView from "./BookingView";
import { toast } from "react-toastify";
import EmptyState from "./EmptyState";

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

  if (doctorData.length < 1) return <EmptyState></EmptyState>;

  return (
    <>
      <div className="md:w-7xl  mx-auto py-2">
        <RechartForBooking doctorData={doctorData}></RechartForBooking>
      </div>
      <div>
        <div className="text-center py-20">
          <h2 className=" font-bold text-3xl">Today my Appoinment</h2>
          <p>
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
        <div className=" md:w-7xl px-10 md:px-0 mx-auto rounded-3xl">
          {doctorData.map((doctor) => (
            <BookingView
              key={doctor.id}
              doctor={doctor}
              handleFavorite={handleFavorite}
            ></BookingView>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mybooking;
