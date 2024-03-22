import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Dropdown from "../screens/Dropdown";

export default function NavRight({ userdata }) {
  return (
    <div className="group relative">
      <div className="flex gap-5 items-center">
        <div>
          <img src="/src/assets/images/notifications.png" alt="notifications" />
        </div>
        <div className="group relative">
          {userdata ? (
            <img
              src="/src/assets/images/avatar.png"
              alt="avatar"
              className="cursor-pointer group-hover:block"
            />
          ) : (
            <FaRegUserCircle size={24} className="group-hover:block" />
          )}
          <div className="hidden group-hover:block absolute top-full right-0 bg-white p-2 shadow-md cursor-pointer rounded-md">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
