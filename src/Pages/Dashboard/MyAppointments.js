import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://desolate-fjord-46813.herokuapp.com/booking?patientEmail=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
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
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr key={a._id}>
                <th>{i + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.service}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className=" text-secondary font-bold">Paid</span>
                      </p>
                      <p>
                        Transaction Id:{" "}
                        <span className=" text-secondary font-bold">
                          {" "}
                          {a.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
