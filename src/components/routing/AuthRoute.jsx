import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { usePathContext } from "../context/PathContext";

const AuthRoute = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("user_data"));
  const location = useLocation();
  const { setPathname } = usePathContext();
  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    setComponentMounted(true);
  }, []);

  useEffect(() => {
    if (componentMounted && !userData) {
      toast.warn("Please log in first");
    }
  }, [componentMounted, userData]);

  if (!userData) {
    setPathname(location.pathname || {});
    return <Navigate to="/auth/login" replace={false} />;
  }

  return children;
};

export default AuthRoute;
