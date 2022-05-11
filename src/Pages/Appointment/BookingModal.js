import { format } from "date-fns";
import React from "react";

const BookingModal = ({ book, selectedDate }) => {
  const { name, slots } = book;
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-12">{name}</h3>
          <input
            value={format(selectedDate, "PP")}
            type="text"
            placeholder="Date"
            disabled
            class="input input-bordered w-full max-w-lg"
          />
          <input
            value={slots[0]}
            type="text"
            placeholder="Slot"
            disabled
            class="input input-bordered w-full max-w-lg mt-6"
          />
          <input
            type="text"
            placeholder="Full Name"
            class="input input-bordered w-full max-w-lg my-6"
          />
          <input
            type="text"
            placeholder="Phone Number"
            class="input input-bordered w-full max-w-lg"
          />
          <input
            type="text"
            placeholder="Email"
            class="input input-bordered w-full max-w-lg my-6"
          />

          <div className="modal-action">
            <label
              uppercase
              for="booking-modal"
              className="btn w-full max-w-lg"
            >
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
