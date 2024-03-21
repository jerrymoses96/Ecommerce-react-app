import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import ViewAccomodation from "../screens/ViewAccomodation/ViewAccomodation";
import NoMatch from "../screens/NoMatch";
import Login from "../screens/Login";
import Signup from "../screens/SignUp";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/viewaccomodation" element={<ViewAccomodation />} />
          <Route path="/viewaccomodation/:id" element={<ViewAccomodation />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/auth/login" element={ <Login/> } />
          <Route path="/auth/create" element={ <Signup/> } />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoute;
