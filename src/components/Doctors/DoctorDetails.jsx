import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleDoctor = data.find((doctor) => doctor.id === parseInt(id));
  const {
    name,
    images,
    fee,
    workplace,
    registrationNumber,
    designation,
    education,
  } = singleDoctor;

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen md:w-7xl mx-auto">
        <div className="md:flex gap-20 w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p>{education}</p>
            <p>{designation}</p>
            <p className="text-xl mt-5">Working at:</p>
            <h3 className="font-bold text-2xl">{workplace}</h3>
            <p>Reg No: {registrationNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
