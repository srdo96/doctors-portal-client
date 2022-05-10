import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import Button from "../Shared/Button";

const HomeAppointment = () => {
  return (
    <div class="hero min-h-16 bg-[url('../../assets/images/appointment.png')] mt-16 lg:mt-80">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          class="mt-[-100px] mb-[-15px] hidden lg:block"
          alt="doctor"
        />
        <div>
          <h1 className="text-xl text-secondary font-bold">Appointment</h1>
          <div className="text-white">
            <h1 class="text-4xl font-bold my-5">Make an appointment Today</h1>
            <p class="py-6 text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
