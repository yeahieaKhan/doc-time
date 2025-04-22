import React from "react";
import { Link } from "react-router";

const Doctor = ({ doctor }) => {
  const { id, name, education, experience, registrationNumber, speciality } =
    doctor;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="w-full card-actions">
            <button
              className="btn  
             "
            >
              Availabe
            </button>
            <button
              className="btn  
             "
            >
              {experience} Experience
            </button>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{education}</p>
          <p>Reg No: {registrationNumber}</p>
          <div className="w-full card-actions">
            <Link to={`doctordetails/${id}`}>
              {" "}
              <button
                className="btn  w-full
             btn-primary"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
