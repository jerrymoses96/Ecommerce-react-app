import React from "react";

const Amenities = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold ">Amenities</h2>
      <div className="w-[100%] my-6">
        <img
          className="w-[100%]"
          src="/src\assets\images\Frame 77.png"
          alt="image"
        />
      </div>
      <button className="border border-t-2 border-[#171E1D] py-3 px-5 font-semibold rounded-md hover:bg-gray-700 hover:text-white">
        Show all amenities
      </button>
    </div>
  );
};

export default Amenities;
