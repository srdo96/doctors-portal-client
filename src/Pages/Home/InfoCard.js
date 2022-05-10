import React from "react";

const InfoCard = ({ info, index }) => {
  const { img, title, desc } = info;
  console.log(img);
  return (
    <div
      className={`card lg:card-side shadow-xl px-6 ${
        index !== 1
          ? "bg-gradient-to-r from-secondary to-primary"
          : " bg-accent"
      }`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title ">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
