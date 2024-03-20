import React from "react";
import { IoMdStar } from "react-icons/io";


const Review = ({ data }) => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-5 ">Review</h2>
      <div className="flex gap-5">
        {/* Review 1 */}
        <div className="border border-[#E8ECF2] p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-3">
              <img src="/src\assets\images\Ellipse 12.png" alt="image" />
              <div>
                <p className="font-semibold">{data[0].name}</p>
                <p className="text-sm text-[#7A7A7A]">{data[0].date}</p>
              </div>
            </div>

            <p className="flex items-center">
              {data[0].rating}
              <IoMdStar size={20} className="text-yellow-500" />
            </p>
          </div>

          <p className="font-light">{data[0].review}</p>
        </div>

        {/* Review 2  */}
        <div className="border border-[#E8ECF2] p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div  className="flex items-center gap-3 mb-3">
              <img src="/src\assets\images\Ellipse 12 (1).png" alt="image" />
              <div>
                <p className="font-semibold">{data[1].name}</p>
                <p className="text-sm text-[#7A7A7A]">{data[1].date}</p>
              </div>
            </div>
            <p className="flex items-center">
              {data[1].rating}
              <IoMdStar size={20} className="text-yellow-500" />
            </p>
          </div>

          <p className="font-light">{data[1].review}</p>
        </div>

        {/* Review 3  */}
        <div className="border border-[#E8ECF2] p-5 rounded-xl">
          <div className="flex items-center justify-between">
            <div  className="flex items-center gap-3 mb-3">
            <img src="/src\assets\images\Ellipse 12 (2).png" alt="image" />
            <div>
              <p className="font-semibold">{data[2].name}</p>
              <p className="text-sm text-[#7A7A7A]">{data[2].date}</p>
            </div>
            </div>
            <p className="flex items-center">
              {data[2].rating}
              <IoMdStar size={20} className="text-yellow-500" />
            </p>
          </div>

          <p className="font-light">{data[2].review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
