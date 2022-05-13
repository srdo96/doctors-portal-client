import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ booking, setBooking, selectedDate }) => {
  const { name, slots } = booking;
  const [user, loading, error] = useAuthState(auth);
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    // for close modal
    setBooking(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-12">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              value={format(selectedDate, "PP")}
              type="text"
              placeholder="Date"
              disabled
              className="input input-bordered w-full max-w-lg"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-lg mt-6"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            {/* name */}
            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              className="input input-bordered w-full max-w-lg my-6"
            />
            {/* phone */}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-lg"
            />
            {/* email */}
            <input
              type="text"
              name="email"
              disabled
              value={user?.email}
              placeholder="Email"
              className="input input-bordered w-full max-w-lg my-6"
            />
            {/* submit */}
            <button
              type="submit"
              className=" btn w-full bg-black text-[#D4D9E3]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
