import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
  };
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

        {/* Password */}
        <label className="label">
          <span className="label-text mt-3">Specialty</span>
        </label>
        <input
          type="text"
          placeholder="Specialty"
          className="input input-bordered w-full max-w-lg"
          {...register("specialty", {
            required: {
              value: true,
              message: "Specialization is Required",
            },
          })}
        />
        <label className="label">
          {errors.specialty?.type === "required" && (
            <span className="label-text-alt text-red-600">
              {errors.specialty.message}
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
