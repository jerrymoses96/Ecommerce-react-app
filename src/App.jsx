import { useEffect, useState } from "react";
import AppRoute from "./components/routing/AppRoute";
import React from "react";

export const userContext = React.createContext();
function App() {
  //authentication
  const [userdata, setuserdata] = useState({});
  const updateUserData = (action) => {
    switch (action.type) {
      case "LOGOUT":
        setuserdata(null);
        localStorage.clear();
        break;
      case "LOGIN":
        setuserdata(action.payload);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setuserdata(JSON.parse(localStorage.getItem("user_data")));
  }, []);

  return (
    <userContext.Provider value={{ userdata, updateUserData }}>
      <div>
        <AppRoute />
      </div>
    </userContext.Provider>
  );
}

export default App;
