import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (googleUser || emailUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, emailUser, from, navigate]);

  let signInError;

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  if (googleError || emailError) {
    signInError = (
      <p className="text-red-600">
        {googleError?.message || emailError?.message}
      </p>
    );
  }

  if (googleLoading || emailLoading) {
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
          <h2 className="text-lg text-center mb-9 mt-6">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
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
              type="password"
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

            <Link to="/reset" className="text-xs  btn-link">
              Forget Password?
            </Link>
            {/* <input type="submit" /> */}
            {signInError}
            <button type="submit" className="btn btn-block mt-5">
              Login
            </button>
          </form>

          <p className="text-center">
            <small>
              New to Doctors Portal?
              <Link
                to="/registration"
                className="ml-1 text-secondary hover:underline"
              >
                Create new account
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

export default Login;
