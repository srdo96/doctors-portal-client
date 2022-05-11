import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableServiceCard from "./AvailableServiceCard";

const AvailableAppointments = ({ selectedDate }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4">
      <h3 className="text-2xl text-secondary text-center mb-24">
        Available Appointments on {format(selectedDate, "PP")}
      </h3>
      <dir className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mr-11">
        {services.map((service) => (
          <AvailableServiceCard key={service._id} service={service} />
        ))}
      </dir>
    </div>
  );
};

export default AvailableAppointments;
