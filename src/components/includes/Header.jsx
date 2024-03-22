import React, { useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../App.css";
import { useUserContext } from "../context/UserContext";
import Dropdown from "../screens/Dropdown";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const { userdata } = useUserContext();

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // Check if the mouse is still over the dropdown before hiding it
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  return (
    <div
      className="py-5 bg-[#F5F5F5] sticky top-0 z-10"
      style={{
        borderTop: "1px solid #E8ECF2",
        borderBottom: "1px solid #E8ECF2",
      }}
    >
      <div className="wrapper flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <h1>
              <img src="/src/assets/images/logo.png" alt="logo" />
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-5 items-center font-normal ">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>Stays</li>
            <li>Become a host</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-5 items-center relative">
            <div>
              <img
                src="/src/assets/images/notifications.png"
                alt="notifications"
              />
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              {userdata ? (
                <img
                  src="/src/assets/images/avatar.png"
                  alt="avatar"
                  className="cursor-pointer"
                />
              ) : (
                <FaRegUserCircle size={24} />
              )}

              {showDropdown && (
                <div className="absolute top-9 right-0 bg-white p-2 shadow-md cursor-pointer rounded-md">
                  {/* Here you can place your login component */}
                  <Dropdown />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
