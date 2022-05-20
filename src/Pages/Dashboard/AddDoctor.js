import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://desolate-fjord-46813.herokuapp.com/services").then((res) =>
      res.json()
    )
  );

  const imgStorageKey = "9e8e2acbf56d42fb4f9548e7cd46ea49";

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to your database
          fetch("https://desolate-fjord-46813.herokuapp.com/addDoctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              inserted.insertedId
                ? toast.success("Doctor added successfully")
                : toast.error("Failed to add the doctor");
              reset();
              console.log("doctor", inserted);
            });
        }
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Add new doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}

        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-lg "
          {...register("name", {
            required: {
              value: true,
              message: "Name is Required",
            },
          })}
        />

        <label className="label">
          {errors.name?.type === "required" && (
            <span className="label-text-alt text-red-600">
              {errors.name.message}
            </span>
          )}
        </label>

        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-lg "
          {...register("email", {
            required: {
              value: true,
              message: "Email is Required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Provide a valid Email",
            },
          })}
        />
        <label className="label">
          {errors.email?.type === "required" && (
            <span className="label-text-alt text-red-600">
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="label-text-alt text-red-600">
              {errors.email.message}
            </span>
          )}
        </label>

        {/* Specialty */}
        <label className="label">
          <span className="label-text mt-3">Specialty</span>
        </label>

        <select
          {...register("specialty")}
          className="select w-full select-bordered max-w-lg block"
        >
          {services.map((service) => (
            <option key={service._id} value={service.value}>
              {service.name}
            </option>
          ))}
        </select>

        {/* Photo */}

        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input
          type="file"
          placeholder="Photo"
          className="input input-bordered w-full max-w-lg "
          {...register("photo", {
            required: {
              value: true,
              message: "photo is Required",
            },
          })}
        />

        <label className="label">
          {errors.photo?.type === "required" && (
            <span className="label-text-alt text-red-600">
              {errors.photo.message}
            </span>
          )}
        </label>

        {/* <input type="submit" /> */}

        <button type="submit" className="btn btn-block mt-5 max-w-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
