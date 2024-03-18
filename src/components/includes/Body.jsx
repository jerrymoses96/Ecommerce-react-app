import { useState } from "react";
import ProductCard from "./ProductCard";
import PriceSlider from "../general/PriceSlider";
import data from "../general/json/data.json";
import RatingFilterDropdown from "../general/RatingFilterDropdown";
import CategoryDropdown from "../general/CategoryDropdown";

const Body = () => {
  const [firstImageActive, setFirstImageActive] = useState(false);
  const [secondImageActive, setSecondImageActive] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [priceRange, setPriceRange] = useState([1, 1000]); // Adjusted price range
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState("relevance");

  console.log(selectedCategories);

  const [sortOptions, setSortOptions] = useState([
    { value: "relevance", label: "Relevance" },
    { value: "priceLowToHigh", label: "Price (Low to High)" },
    { value: "priceHighToLow", label: "Price (High to Low)" },

  
  ]);

  const toggleFirstImage = () => {
    setFirstImageActive(!firstImageActive);
    setSecondImageActive(false);
  };

  const toggleSecondImage = () => {
    setSecondImageActive(!secondImageActive);
    setFirstImageActive(false);
  };

  // sort logic here

  const sortProducts = (data, selectedSort) => {
    switch (selectedSort) {
      case "priceLowToHigh":
        return data.sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return data.sort((a, b) => b.price - a.price);
      // Handle other sorting options here
      default:
        return data;
    }
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  // Apply filtering based on selected ratings, price range, and brands
  let filteredData = data.filter((product) => {
    const averageRating = product.average_rating;
    const price = product.price;
    return (
      (selectedRatings.length === 0 ||
        selectedRatings.some((rating) => rating <= averageRating)) &&
      price >= priceRange[0] &&
      price <= priceRange[1] &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.categories))
    );
  });

  // Apply sorting
  filteredData = sortProducts(filteredData, selectedSort);

  return (
    <div className="my-10">
      <div className="wrapper flex gap-10">
        {/* Rating Filter Dropdown */}
        <RatingFilterDropdown onChange={setSelectedRatings} />
        <div className="border border-[#D1D5DB] rounded-lg px-5 flex flex-col items-center justify-center ">
          {/* Price Slider */}
          <PriceSlider priceRange={priceRange} setPriceRange={setPriceRange} />
        </div>
        {/* categories dropdown  */}
        <CategoryDropdown onChange={setSelectedCategories} />

        {/* Sort Dropdown */}
        <div className="self-end pt-10 pr-10">
          <label htmlFor="sort" className="text-gray-700 mb-2 mr-2 font-light">
            Sort by:
          </label>
          <select
            id="sort"
            name="Sort"
            value={selectedSort}
            onChange={handleSortChange}
            className="bg-gray-50 border font-thin border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-width-1 pl-3 pr-10 py-2"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
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
      <div
        className={`flex flex-wrap wrapper ${
          filteredData.length < 3 ? "justify-evenly" : "justify-between"
        }`}
      >
        {/* Map over filtered data and render ProductCard for each item */}
        {filteredData.length === 0 ? (
          <div className="flex items-center justify-center w-full text-2xl font-medium text-gray-400 h-[50vh]">
            No Items Found...
          </div>
        ) : (
          filteredData.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
