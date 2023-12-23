import React from "react";
import { useAuth } from "../../data/store";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authState=useAuth((state)=>state.isAuthenticated)
  let location = useLocation();

  if (!authState) {
    return <Navigate to="/users/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
