import React from "react";
import Service from "./Service";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import fluoride from "../../assets/images/fluoride.png";
import ServiceBanner from "./ServiceBanner";

const Services = () => {
  const data = [
    {
      title: "Fluoride Treatment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo est.",
      img: fluoride,
    },
    {
      title: "Cavity Filling",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo est.",
      img: cavity,
    },
    {
      title: "Teeth Whitening",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo est.",
      img: whitening,
    },
  ];

  return (
    <div>
      <h4 className="text-xl font-bold uppercase text-secondary text-center mt-32">
        Our services
      </h4>
      <h2 className="text-4xl text-center mt-2">Services We Provide</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-14 items-center">
        {data.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
      <div>
        <ServiceBanner />
      </div>
    </div>
  );
};

export default Services;
