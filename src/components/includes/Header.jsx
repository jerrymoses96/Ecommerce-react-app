import { useRef, useState } from "react";
import "../../App.css";
import { useUserContext } from "../context/UserContext";
import NavMid from "./NavMid";
import NavTop from "./NavTop";
import NavRight from "./NavRight";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHamburgerDropdown, setShowHamburgerDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const { userdata } = useUserContext();

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = (event) => {
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  const toggleHamburgerDropdown = () => {
    setShowHamburgerDropdown(!showHamburgerDropdown);
  };

  const closeHamburgerDropdown = () => {
    setShowHamburgerDropdown(false);
  };

  return (
    <div
      className="py-5 bg-[#F5F5F5] sticky top-0 z-10 relative"
      style={{
        borderTop: "1px solid #E8ECF2",
        borderBottom: "1px solid #E8ECF2",
      }}
    >
      <div className="wrapper flex justify-between items-center">
        {/* Conditionally render hamburger or cross icon based on the state */}
        {showHamburgerDropdown ? (
          <div className="block md:hidden" onClick={closeHamburgerDropdown}>
            <RxCross2 />
          </div>
        ) : (
          <div className="block md:hidden" onClick={toggleHamburgerDropdown}>
            <RxHamburgerMenu />
          </div>
        )}
        <NavTop />
        <div className="hidden md:block">
          <NavMid />
        </div>
        <NavRight
          showDropdown={showDropdown}
          dropdownRef={dropdownRef}
          userdata={userdata}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
      {showHamburgerDropdown && (
        <div className="hamburger-dropdown absolute top-20 left-0 w-full h-screen bg-black opacity-90 text-white text-xl ">
          <ul className="gap-5 flex flex-col justify-center py-40 items-center font-bold ">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>Stays</li>
            <li>Become a host</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
