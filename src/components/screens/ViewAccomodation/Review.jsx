import React from "react";
import { IoMdStar } from "react-icons/io";

const Review = ({ data }) => {
  const image_url = [
    "/src/assets/images/Ellipse 12.png",
    "/src/assets/images/Ellipse 12 (1).png",
    "/src/assets/images/Ellipse 12 (2).png",
  ];

  // Sort data by rating in descending order
  const sortedData = [...data].sort((a, b) => b.rating - a.rating);

  return (
    <div className="my-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-5">Review</h2>
        <button className="text-[#00C29F] font-semibold hover:text-green-700" onClick={() => console.log("View all clicked")}>view all</button>
      </div>
      <div className="flex gap-5">
        {sortedData.map((review, index) => (
          <div key={review.id} className="border border-[#E8ECF2] p-5 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 mb-3">
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
