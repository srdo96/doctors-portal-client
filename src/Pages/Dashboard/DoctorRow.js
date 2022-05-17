import React from "react";

const DoctorRow = ({ doctor, index }) => {
  const { img, name, specialty } = doctor;
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
      <td>{specialty}</td>

      <td>
        <button class="btn btn-xs btn-error">Remove</button>
      </td>
    </tr>
  );
};

export default DoctorRow;
