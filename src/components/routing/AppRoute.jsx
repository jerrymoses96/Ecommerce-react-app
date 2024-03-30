import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import ViewAccomodation from "../screens/ViewAccomodation/ViewAccomodation";
import NoMatch from "../screens/NoMatch";
import Login from "../screens/Login";
import Signup from "../screens/SignUp";
import AuthRoute from "./AuthRoute";
import HomeRoute from "./HomeRoute";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route path="/viewaccomodation" element={<ViewAccomodation />} />

          <Route
            path="/viewaccomodation/:id"
            element={
              <AuthRoute>
                <ViewAccomodation />
              </AuthRoute>
            }
          />
          <Route path="*" element={<NoMatch />} />
          <Route
            path="/auth/login"
            element={
              <HomeRoute>
                <Login />
              </HomeRoute>
            }
          />
          <Route path="/auth/create" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoute;
