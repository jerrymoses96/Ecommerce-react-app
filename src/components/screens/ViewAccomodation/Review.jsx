import React from "react";
import { IoMdStar } from "react-icons/io";
import Button from "../../general/button/Button";

const Review = ({ data }) => {
  const image_url = [
    "/src/assets/images/Ellipse 12.png",
    "/src/assets/images/Ellipse 12 (1).png",
    "/src/assets/images/Ellipse 12 (2).png",
  ];

  // Sort data by rating in descending order
  const sortedData = [...data].sort((a, b) => b.rating - a.rating);

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <h2 className="mb-5 text-2xl font-semibold">Review</h2>
        <Button label={"View All"} />
      </div>
      <div className="lg:flex- flex flex-col gap-5">
        {sortedData.map((review, index) => (
          <div
            key={review.id}
            className="mb-4 rounded-xl border border-[#E8ECF2] p-5 lg:mb-0"
          >
            <div className="flex items-center justify-between">
              <div className="mb-3 flex items-center gap-3">
                <img src={image_url[index]} alt="profile" />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-[#7A7A7A]">{review.date}</p>
                </div>
              </div>

              <p className="flex items-center">
                {review.rating}
                <IoMdStar size={20} className="text-yellow-500" />
              </p>
            </div>
            <p className="font-light">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
