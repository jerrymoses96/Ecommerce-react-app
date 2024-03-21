import React, { useEffect, useState } from "react";
import AppRoute from "./components/routing/AppRoute";
import { SearchProvider } from "./components/context/SearchContext";

export const Pathcontext = React.createContext();
export const userContext = React.createContext();
function App() {
  // protected auth
  const [pathname, setPathname] = useState(null);
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
    <Pathcontext.Provider value={{ setPathname }}>
      <userContext.Provider value={{ userdata, updateUserData }}>
        <SearchProvider>
          <div>
            <AppRoute />
          </div>
        </SearchProvider>
      </userContext.Provider>
    </Pathcontext.Provider>
  );
}

export default App;
