import React from "react";
import treatment from "../../assets/images/treatment.png";
import Button from "../Shared/Button";
const ServiceBanner = () => {
  return (
    <div class="hero min-h-screen mt-40 ">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="mr-24 rounded-md "
          alt="treatment pic"
        />
        <div>
          <h1 class="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
