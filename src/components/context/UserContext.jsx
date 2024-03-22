import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
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
    <UserContext.Provider value={{ userdata, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};
