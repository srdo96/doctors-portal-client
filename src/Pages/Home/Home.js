import React from "react";
import HomeAppointment from "./HomeAppointment";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <Info />
      <Services />
      <HomeAppointment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
