import React from "react";

const Service = ({ service }) => {
  const { img, title, desc } = service;
  return (
    <div class="card shadow-xl ">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center mb-9">
        <h2 class="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Service;
