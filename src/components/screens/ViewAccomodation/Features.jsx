import React from "react";

const Features = () => {
  return (
    <div className="pl-16 flex flex-col gap-4">
      <div className="flex items-center gap-5">
        <img className="w-[50px]" src="/src\assets\images\Frame 65.png" alt="logo" />
        <div>
          <p className="text-lg font-semibold">Dedicated workspace</p>
          <p className="text-base text-[#7A7A7A] font-normal">
            A private room equipped with WiFi
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img className="w-[50px]" src="/src\assets\images\Frame 65 (1).png" alt="image" />
        <div>
          <p className="text-lg font-semibold">Self check-in</p>
          <p className="text-base text-[#7A7A7A] font-normal">
            Check in with just your phone
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img className="w-[50px]" src="/src\assets\images\Frame 65 (2).png" alt="img" />
        <div>
          <p className="text-lg font-semibold">Free cancellation</p>
          <p className="text-base text-[#7A7A7A] font-normal">Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
