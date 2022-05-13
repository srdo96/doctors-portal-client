import { async } from "@firebase/util";
import { updatePassword } from "firebase/auth";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Registration = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log(data);
    navigate("/appointment");
  };

  if (googleError || emailError || updateError) {
    signInError = (
      <p className="text-red-600">
        {googleError?.message || emailError?.message}
      </p>
    );
  }

  if (emailUser || googleUser) {
    console.log(emailUser || googleUser);
  }

  if (googleLoading || emailLoading || updating) {
    return (
      <div className="h-screen flex justify-center items-center">
        <button className="btn loading "></button>
      </div>
    );
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="mx-7">
          <h2 className="text-lg text-center mb-9 mt-6">Registration</h2>

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
              <span className="label-text mt-3">Password</span>
            </label>
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-lg"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be six characters or longer",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-600">
                  {errors.password.message}
                </span>
              )}
            </label>

            {/* <input type="submit" /> */}
            {signInError}
            <button type="submit" className="btn btn-block mt-5">
              Registration
            </button>
          </form>

          <p className="text-center">
            <small>
              Already have an account?
              <Link
                to="/registration"
                className="ml-1 text-secondary hover:underline"
              >
                Login
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline uppercase mb-7 mt-6 flex w-ful mx-auto"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
