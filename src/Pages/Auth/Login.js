import React from "react";
import { Link } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="mx-7">
          <h2 class="text-lg text-center mb-9 mt-6">Login</h2>
          <form>
            <p>Email</p>
            <input
              type="text"
              placeholder="Email "
              class="input input-bordered  w-full max-w-lg mb-3"
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              class="input input-bordered  w-full max-w-lg"
            />
            <Link to="/reset" className="text-xs  btn-link">
              Forget Password?
            </Link>
            <button type="submit" class="btn btn-block mt-5">
              Login
            </button>
          </form>
          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline uppercase mb-7 mt-6 flex w-ful mx-auto"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
