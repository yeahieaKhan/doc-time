import React from "react";
import Banner from "../pages/Banner";
import Doctors from "../Doctors/Doctors";
import { useLoaderData } from "react-router";

const Home = () => {
  const doctors = useLoaderData();
  console.log(doctors);
  return (
    <div>
      <h2>Hello form home components</h2>
      <Banner></Banner>
      <Doctors doctors={doctors}> </Doctors>
    </div>
  );
};

export default Home;
