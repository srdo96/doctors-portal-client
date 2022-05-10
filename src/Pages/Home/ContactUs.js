import React from "react";
import Button from "../Shared/Button";
import appointment from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="mt-36 bg-[url('../../assets/images/appointment.png')]">
      <form className="text-center py-16 px-9 lg:px-96 ">
        <h4 className="text-xl text-secondary font-bold">Contact Us</h4>
        <h1 className="text-4xl font-normal text-white mb-14">
          Stay connected with us
        </h1>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="Subject"
            placeholder="Subject"
            class="input input-bordered w-full max-w-xs my-5"
          />
        </div>
        <div>
          <textarea
            class="textarea textarea-bordered w-full max-w-xs mb-9"
            placeholder="Your Message"
          ></textarea>
        </div>
        <Button text={"Submit"} />
      </form>
    </div>
  );
};

export default ContactUs;
