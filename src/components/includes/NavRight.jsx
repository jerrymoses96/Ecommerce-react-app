import { FaRegUserCircle } from "react-icons/fa";
import Dropdown from "../screens/Dropdown";

export default function NavRight(props) {
  return (
    <div>
      <div className="flex gap-5 items-center relative">
        <div>
          <img src="/src/assets/images/notifications.png" alt="notifications" />
        </div>
        <div
          onMouseEnter={props.handleMouseEnter}
          onMouseLeave={props.handleMouseLeave}
          ref={props.dropdownRef}
        >
          {props.userdata ? (
            <img
              src="/src/assets/images/avatar.png"
              alt="avatar"
              className="cursor-pointer"
            />
          ) : (
            <FaRegUserCircle size={24} />
          )}

          {props.showDropdown && (
            <div className="absolute top-7 right-0 bg-white p-2 shadow-md cursor-pointer rounded-md">
              {/* Here you can place your login component */}
              <Dropdown />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
