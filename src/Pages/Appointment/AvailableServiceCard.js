import React from "react";
import Button from "../Shared/Button";

const AvailableServiceCard = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg  shadow-md">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{name}</h2>
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
        <div class="card-actions justify-end">
          <Button text="Book Appointment" isDisabled={!slots.length} />
        </div>
      </div>
    </div>
  );
};

export default AvailableServiceCard;
