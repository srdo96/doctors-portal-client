import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="mt-4">My appointment: {appointments.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
