import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data, isLoading } = useQuery(["booking", id], () =>
    axios({
      url: url,
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res)
  );

  if (isLoading) return <Loading />;
  const { data: appointment } = data;
  //   console.log("data", data);
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 class="card-title">Pay for {appointment.service}</h2>
          <p>
            We will see you on{" "}
            <span className="text-orange-700">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p>Please pay ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          {" "}
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
