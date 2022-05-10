import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  const data = [
    {
      title: "Opening Hours",
      img: clock,
      desc: "10.00 AM - 10.00 PM",
    },
    {
      title: "Visit our location",
      img: marker,
      desc: "Brooklyn, NY 10036, United States",
    },
    {
      title: "Contact us now",
      img: phone,
      desc: "+000 123 456789",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
      {data.map((info, index) => (
        <InfoCard key={index} info={info} index={index} />
      ))}
    </div>
  );
};

export default Info;
