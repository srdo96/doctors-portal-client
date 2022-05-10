import React from "react";
import TestimonialCard from "./TestimonialCard";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div>
      <div className="ml-14 flex justify-between">
        <div>
          <h4 className="text-xl text-secondary font-bold mt-4">Testimonial</h4>
          <h1 className="text-4xl font-normal">What Our Patients Says</h1>
        </div>
        {/* <div className=""> */}
        <img src={quote} className="mt-[-18px] h-40 w-24 lg:w-48" alt="" />
        {/* </div> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 mt-24">
        <TestimonialCard img={people1} />
        <TestimonialCard img={people2} />
        <TestimonialCard img={people3} />
      </div>
    </div>
  );
};

export default Testimonial;
