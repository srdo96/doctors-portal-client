import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const DeleteConfirmModal = ({ removeDoctor, refetch, setRemoveDoctor }) => {
  const { name, email } = removeDoctor;

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
          setRemoveDoctor(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500 text-center">
            Are you sure you want to remove {name}?
          </h3>

          <div className="modal-action flex justify-center">
            <button onClick={handleDelete} class="btn btn-xs btn-error">
              Remove
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs ">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
