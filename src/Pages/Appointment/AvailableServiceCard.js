import React from "react";

const AvailableServiceCard = ({ service, setBooking }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg  shadow-md">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p className="text-black">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-end">
          <label
            disabled={slots.length === 0 && "disabled"}
            onClick={() => setBooking(service)}
            htmlFor="booking-modal"
            className=" modal-button btn btn-secondary uppercase text-white bg-gradient-to-r from-secondary to-primary"
          >
            Booking Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableServiceCard;
