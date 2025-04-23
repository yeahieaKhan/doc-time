import { Link, useLoaderData, useParams } from "react-router";
import Navbar from "../pages/Navbar";
import { addFavorite } from "../Utilitys";
import { toast } from "react-toastify";

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

  const handleFavorite = (name) => {
    addFavorite(singleDoctor);

    toast.success(`doctor appoinment booked ${name}`);
  };

  return (
    <div className="md:w-7xl mx-auto">
      <div>
        <h2 className="font-bold text-3xl text-center py-20">
          Doctor’s Profile Details
        </h2>
      </div>
      <div>
        <div className="hero bg-base-200  md:w-7xl mx-auto">
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
      <div>
        <h2 className="font-bold text-3xl py-10 text-center">
          Book an Appointment
        </h2>

        <div className="md:flex justify-between">
          <h2>Availablity</h2>
          <h2>Doctor Avalabable</h2>
        </div>
        <h2 className="text-amber-500 py-10">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </h2>
        <div className="py-10">
          <Link to={"/mybooking"} onClick={() => handleFavorite(name)}>
            <button className="btn btn-success w-full text-white">
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
