import React from "react";
import bannerPic from "../../assets/images/chair.png";
import Button from "../Shared/Button";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen px-10 bg-[url('../../assets/images/bg.png')]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerPic}
            className="max-w-sm rounded-lg shadow-2xl "
            alt="banner pic"
          />
          <div className="mr-20">
            <h1 className="text-5xl font-bold">
              Your New Smile Starts <br />
              Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
