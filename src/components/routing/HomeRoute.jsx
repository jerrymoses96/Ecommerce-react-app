import { Navigate, useLocation } from "react-router-dom";

const HomeRoute = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("user_data"));

  if (userData) {
    return <Navigate to={"/"} replace={false} />;
  }
  return children;
};

export default HomeRoute;
