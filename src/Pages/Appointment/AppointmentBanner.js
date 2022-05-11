import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
          <p>You have selected: {format(selectedDate, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
