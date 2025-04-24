import React from "react";
import Banner from "../pages/Banner";
import Doctors from "../Doctors/Doctors";
import { useLoaderData } from "react-router";
import Footer from "../pages/Footer";
import Services from "../pages/Services";

const Home = () => {
  const doctors = useLoaderData();
  console.log(doctors);
  return (
    <div>
      <Banner></Banner>
      <Doctors doctors={doctors}> </Doctors>
      <Services></Services>
    </div>
  );
};

export default Home;
