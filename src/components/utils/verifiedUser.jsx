import React from "react";
import { useAuth,userStore } from "../../data/store";
import { Navigate, useLocation } from "react-router-dom";

const RedirectVerify = ({ children }) => {
  const {profile}=userStore(state=>state)
  let location = useLocation();

  if (profile.is_verified) {
    return (
      <Navigate to={"/users/dashboard"} state={{ from: location }} replace />
    );
  }
  return children;
};

export default RedirectVerify;
