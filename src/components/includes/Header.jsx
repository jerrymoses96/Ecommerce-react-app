import { useRef, useState } from "react";
import "../../App.css";
import { useUserContext } from "../context/UserContext";
import NavMid from "./NavMid";
import NavTop from "./NavTop";
import NavRight from "./NavRight";

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
        <NavTop />
        <NavMid />
        <NavRight
          showDropdown={showDropdown}
          dropdownRef={dropdownRef}
          userdata={userdata}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Header;
