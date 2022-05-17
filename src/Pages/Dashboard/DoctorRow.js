import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { img, name, specialty, email } = doctor;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/doctor/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res.data.deletedCount) {
          toast.success(`Dr ${name} is remove.`);
          refetch();
        }
      });
  };

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
        <button onClick={handleDelete} class="btn btn-xs btn-error">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
