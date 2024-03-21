import React, { useContext } from "react";
import { userContext } from "../../App";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const { userdata, updateUserData } = useContext(userContext);

  const HandleLogout = () => {
    updateUserData({ type: "LOGOUT" });
  };

  return (
    <div className="rounded-md bg-white px-4 py-2 ">
      {userdata ? (
        <p onClick={()=>HandleLogout()} className="font-semibold">Logout</p>
      ) : (
        <Link to={"/auth/login"}>
          <p className="font-semibold">Login</p>
        </Link>
      )}
    </div>
  );
};

export default Dropdown;
