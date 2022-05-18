import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const DoctorRow = ({ doctor, index, refetch, setRemoveDoctor }) => {
  const { img, name, specialty, email } = doctor;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div class="avatar">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
            <img src={img} alt={`${name}'s pic`} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>

      <td>
        <label
          onClick={() => setRemoveDoctor(doctor)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs btn-error"
        >
          Remove
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
