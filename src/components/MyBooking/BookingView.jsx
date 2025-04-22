import React from "react";
import { removeFavorite } from "../Utilitys";

const BookingView = ({ doctor, handleCanleAppoinment }) => {
  const { id, name, designation, fee } = doctor;
  return (
    <div className="border w-7xl mx-auto mt-10  p-14">
      <div className="md:flex md:justify-between">
        <div>
          <h2 className="font-bold">{name}</h2>
          <h2>{designation}</h2>
        </div>
        <div>
          <h2>Appoinment fee: {fee} + Vat</h2>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleCanleAppoinment(id)}
          className="btn w-full border-red-700 mt-10 text-red-700 rounded-2xl"
        >
          Cancle Appoinment
        </button>
      </div>
    </div>
  );
};

export default BookingView;
