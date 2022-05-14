import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AvailableServiceCard from "./AvailableServiceCard";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  // const [services, setServices] = useState([]);
  const [booking, setBooking] = useState(null);

  const formattedData = format(selectedDate, "PP");

  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["available", formattedData], () =>
    fetch(`http://localhost:5000/available?date=${formattedData}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedData}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedData]);

  return (
    <div className="mt-4">
      <h3 className="text-2xl text-secondary text-center mb-24">
        Available Appointments on {format(selectedDate, "PP")}
      </h3>
      <dir className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mr-11">
        {services?.map((service) => (
          <AvailableServiceCard
            key={service._id}
            service={service}
            setBooking={setBooking}
          />
        ))}
      </dir>
      {booking && (
        <BookingModal
          booking={booking}
          setBooking={setBooking}
          selectedDate={selectedDate}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
