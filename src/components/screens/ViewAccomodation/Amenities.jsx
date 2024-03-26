import React from "react";

const Amenities = () => {
  return (
    <div className="w-[100%">
      <h2 className="text-2xl font-semibold ">Amenities</h2>
      {/* <div className="my-6 w-[100%] sm:w-[100%]">
        <img
          className="w-[100%] object-cover"
          src="/src\assets\images\Frame 77.png"
          alt="image"
        />
      </div> */}
      <div className="my-6 flex flex-col sm:flex-row gap-3 sm:gap-20 md:gap-22 mr-2 text-sm font-medium text-[#171E1D]">
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            {" "}
            <img src="/src\assets\images\amenities\mdi_lake.png" alt="lake" />
            Lakeside
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img
              src="/src\assets\images\amenities\tabler_tools-kitchen-2.png"
              alt="kitchen"
            />
            Kitchen
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img
              src="/src\assets\images\amenities\material-symbols_nest-cam-iq-outdoor-outline.png"
              alt="cam"
            />
            Security cameras on property
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img src="/src\assets\images\amenities\ion_wifi.png" alt="cam" />
            Wifi
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            {" "}
            <img src="/src\assets\images\amenities\ph_car.png" alt="cam" />
            Free parking
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img src="/src\assets\images\amenities\cil_shower.png" alt="cam" />
            Outdoor shower
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img
              src="/src\assets\images\amenities\material-symbols_water-voc-outline-rounded.png"
              alt="cam"
            />
            Hot water
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img
              src="/src\assets\images\amenities\covid_personal-hygiene-hand-liquid-soap.png"
              alt="cam"
            />
            Shampoo
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            {" "}
            <img
              src="/src\assets\images\amenities\ph_fire-extinguisher.png"
              alt="cam"
            />
            Fire Extinguisher
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img
              src="/src\assets\images\amenities\streamline_food-kitchenware-refrigerator-fridge-cook-appliances-cooking-nutrition-freezer-appliance-food.png"
              alt="cam"
            />
            Freezer
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img
              src="/src\assets\images\amenities\material-symbols_coffee-maker-outline.png"
              alt="cam"
            />
            Coffee Maker
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <img src="/src\assets\images\amenities\mdi_stove.png" alt="cam" />
            Glass stove
          </li>
        </ul>
      </div>
      <button className="rounded-md border border-t-2 border-[#171E1D] px-5 py-3 font-semibold hover:bg-gray-700 hover:text-white">
        Show all amenities
      </button>
    </div>
  );
};

export default Amenities;
