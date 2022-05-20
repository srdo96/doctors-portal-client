import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, patientEmail, patientName } = appointment;
  useEffect(() => {
    fetch("https://desolate-fjord-46813.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;
    const card = elements.getElement(CardElement);
    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      });

    if (processing) {
      return <Loading />;
    }
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Your payment is completed.");

      // store payment on database
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://desolate-fjord-46813.herokuapp.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProcessing(false);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-xs mt-4"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-green-500 font-bold">
          <p>{success}</p>
          <p>
            Your transaction id:
            <span className="text-orange-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
