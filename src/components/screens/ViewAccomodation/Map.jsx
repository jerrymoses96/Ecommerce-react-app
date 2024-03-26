import React from "react";

const Map = () => {
  return (
    <div>
      <div className="flex justify-between mt-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold">Where you'll be</h2>
          <p className="flex gap-2 items-center">
            {" "}
            <img
              className="w-[10px] h-[15px]"
              src="/src\assets\images\Vector.png"
              alt="img"
            />
            The Bridle Path
          </p>
        </div>
        <img
          className=" w-[15%] h-[15%] lg:w-[35%] lg:h-[35%]"
          src="/src\assets\images\Frame 2022.png"
          alt="img"
        />
      </div>
      <iframe
        className="rounded-xl w-[100%] lg:w-[400px] "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.776946366112!2d-79.37187082346595!3d43.73596034707351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd37d0b648b1%3A0xe84c4903372f7f2f!2sThe%20Bridle%20Path%2C%20North%20York%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1710910657335!5m2!1sen!2sin"
        width="400" // Change width to 600 pixels
        height="250" // Change height to 450 pixels
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
