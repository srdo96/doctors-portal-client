import React from "react";
import HomeAppointment from "./HomeAppointment";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <Info />
      <Services />
      <HomeAppointment />
    </div>
  );
};

export default Home;
