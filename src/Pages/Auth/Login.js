import React from "react";
import { Link } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="mx-7">
          <h2 className="text-lg text-center mb-9 mt-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <label class="label">
              <span class="label-text">Email</span>
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
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red-600">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-red-600">
                  {errors.email.message}
                </span>
              )}
            </label>

            {/* Password */}
            <label class="label">
              <span class="label-text mt-3">Password</span>
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
            <label class="label">
              {errors.password?.type === "required" && (
                <span class="label-text-alt text-red-600">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span class="label-text-alt text-red-600">
                  {errors.password.message}
                </span>
              )}
            </label>

            <Link to="/reset" className="text-xs  btn-link">
              Forget Password?
            </Link>
            {/* <input type="submit" /> */}
            <button type="submit" className="btn btn-block mt-5">
              Login
            </button>
          </form>

          {/* <form>
            <p>Email</p>
            <input
              type="text"
              placeholder="Email "
              className="input input-bordered  w-full max-w-lg mb-3"
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered  w-full max-w-lg"
            />
            <Link to="/reset" className="text-xs  btn-link">
              Forget Password?
            </Link>
            <button type="submit" className="btn btn-block mt-5">
              Login
            </button>
          </form> */}
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
