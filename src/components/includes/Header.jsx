import "../../App.css";

const Header = () => {
  return (
    <div
      className="py-5 bg-[#F5F5F5]"
      style={{
        borderTop: "1px solid #E8ECF2",
        borderBottom: "1px solid #E8ECF2",
      }}
    >
      <div className="wrapper flex justify-between items-center">
        <div>
          <h1>
            <img src="src\assets\images\logo.png" />
          </h1>
          
          
        </div>
        <div>
          <ul className="flex gap-5 items-center font-normal ">
            <li>Home</li>
            <li>Stays</li>
            <li>Become a host</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <div>
              <img
                src="src\assets\images\notifications.png"
                alt="notifications"
              />
            </div>
            <div>
              <img src="src\assets\images\avatar.png" alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
