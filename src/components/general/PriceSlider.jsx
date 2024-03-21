import React from 'react';
import "../../App.css";

const PriceSlider = ({ priceRange, setPriceRange }) => {
  return (
    <div>
      <label htmlFor="price-slider" className="flex text-gray-700 text-sm font-extralight justify-center ">
        <p className="font-bold">${priceRange[0]} - ${priceRange[1]}</p>
      </label>
      <input
        type="range"
        min="1"
        max="1000"
        value={priceRange[1]}
        onChange={(e) =>
          setPriceRange([priceRange[0], parseInt(e.target.value)])
        }
        className="slider "
        id="price-slider"
      />
    </div>
  );
};

export default PriceSlider;
