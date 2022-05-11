import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailableAppointments = ({ selectedDate }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4">
      <h3 className="text-3xl text-secondary text-center mb-24">
        Available Appointments on {format(selectedDate, "PP")}
      </h3>
    </div>
  );
};

export default AvailableAppointments;
