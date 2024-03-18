import { useState } from "react";
import ProductCard from "./ProductCard";

import data from "../general/json/data.json";
import RatingFilterDropdown from "../general/json/RatingFilterDropdown";

const Body = () => {
  const [firstImageActive, setFirstImageActive] = useState(false);
  const [secondImageActive, setSecondImageActive] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const toggleFirstImage = () => {
    setFirstImageActive(!firstImageActive);
    setSecondImageActive(false);
  };

  const toggleSecondImage = () => {
    setSecondImageActive(!secondImageActive);
    setFirstImageActive(false);
  };

  // Apply filtering based on selected ratings
  let filteredData = data;
  if (selectedRatings.length > 0) {
    filteredData = data.filter((product) => {
      const averageRating = product.average_rating;
      return selectedRatings.some((rating) => rating <= averageRating);
    });
  }

  return (
    <div className="my-10">
      <div className="wrapper flex">
        <RatingFilterDropdown onChange={setSelectedRatings} />
        
      </div>
      <div className="wrapper flex justify-between my-5">
        <p className="text-xl">
          Stays nearby: <span className="font-semibold">All</span>
        </p>
        <div className="flex gap-5">
          <img
            src="src\assets\images\Frame 25.png"
            alt="logo"
            onClick={toggleFirstImage}
            className={firstImageActive ? "active" : ""}
          />
          <img
            src="src\assets\images\Frame 24.png"
            alt="logo"
            onClick={toggleSecondImage}
            className={secondImageActive ? "active" : ""}
          />
        </div>
      </div>
      <div className="flex flex-wrap wrapper justify-between">
        {/* Map over filtered data and render ProductCard for each item */}
        {filteredData.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
