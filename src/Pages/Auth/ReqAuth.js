import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const ReqAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <button className="btn loading "></button>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ReqAuth;
