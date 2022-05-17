import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const { data, isLoading, refetch } = useQuery("allDoctors", () =>
    // fetch("http://localhost:5000/doctors").then((res) => res.json())
    axios.get("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  const { data: doctors } = data;
  console.log(doctors);
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
