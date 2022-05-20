import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [removeDoctor, setRemoveDoctor] = useState(null);

  const { data, isLoading, refetch } = useQuery("allDoctors", () =>
    // fetch("https://desolate-fjord-46813.herokuapp.com/doctors").then((res) => res.json())
    axios.get("https://desolate-fjord-46813.herokuapp.com/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  const { data: doctors } = data;

  return (
    <div>
      <h2 className="text-2xl">Manage Doctors {doctors.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <DoctorRow
                key={doctor._id}
                index={i}
                doctor={doctor}
                refetch={refetch}
                setRemoveDoctor={setRemoveDoctor}
              />
            ))}
          </tbody>
        </table>
      </div>
      {removeDoctor && (
        <DeleteConfirmModal
          removeDoctor={removeDoctor}
          refetch={refetch}
          setRemoveDoctor={setRemoveDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
