import { useState, useEffect } from "react";
import { useSearchContext } from "../context/SearchContext";
import CategoryDropdown from "../general/CategoryDropdown";
import ImageToggle from "../general/ImageToggle";
import PriceSlider from "../general/PriceSlider";
import RatingFilterDropdown from "../general/RatingFilterDropdown";
import data from "../general/json/data.json";
import ProductCard from "./ProductCard";

const Body = () => {
  // State variables
  const [firstImageActive, setFirstImageActive] = useState(false);
  const [secondImageActive, setSecondImageActive] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState("relevance");
  const [showMore, setShowMore] = useState(false);
  const { searchQuery, setSearchQuery } = useSearchContext();

  // Filtered and sorted data
  const [filteredData, setFilteredData] = useState([]);

  // Sort options
  const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "priceLowToHigh", label: "Price (Low to High)" },
    { value: "priceHighToLow", label: "Price (High to Low)" },
  ];

  // Toggle image functions
  const toggleFirstImage = () => {
    setFirstImageActive(!firstImageActive);
    setSecondImageActive(false);
  };

  const toggleSecondImage = () => {
    setSecondImageActive(!secondImageActive);
    setFirstImageActive(false);
  };

  // Sorting products function
  const sortProducts = (data, selectedSort) => {
    switch (selectedSort) {
      case "priceLowToHigh":
        return data.slice().sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return data.slice().sort((a, b) => b.price - a.price);
      default:
        return data;
    }
  };

  // Handle sort change
  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  // Update filtered data when searchQuery or other filters change
  useEffect(() => {
    const filtered = data.filter((product) => {
      const averageRating = product.average_rating;
      const price = product.price;
      return (
        (selectedRatings.length === 0 ||
          selectedRatings.some((rating) => rating <= averageRating)) &&
        price >= priceRange[0] &&
        price <= priceRange[1] &&
        (selectedCategories.length === 0 ||
          selectedCategories.some((category) =>
            product.categories.includes(category)
          )) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchQuery, selectedRatings, priceRange, selectedCategories]);

  // Apply sorting
  const sortedData = sortProducts(filteredData, selectedSort);

  // Determine number of items to display
  const initialItemsToShow = 12;
  const itemsToShow = showMore ? sortedData.length : initialItemsToShow;

  return (
    <div className="my-10">
      {/* Filter section */}
      <div className="wrapper flex justify-between py-3 px-3 rounded-lg border border-green-200">
        <div className="flex gap-5">
          {/* Rating filter */}
          <RatingFilterDropdown onChange={setSelectedRatings} />

          {/* Category filter */}
          <CategoryDropdown onChange={setSelectedCategories} />

          {/* Price slider */}
          <div className="border border-[#D1D5DB] rounded-lg px-5  flex flex-col items-center justify-center">
            <PriceSlider
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
        </div>

        {/* Sort dropdown */}
        <div>
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

      {/* Image toggle */}
      <div className="wrapper flex justify-between items-center my-5">
        <p className="text-xl">
          Stays nearby: <span className="font-semibold">All</span>
        </p>

        <ImageToggle
          image1Src="src\assets\images\Frame 25.png"
          image2Src="src\assets\images\Frame 24.png"
          active={firstImageActive}
          onClick={toggleFirstImage}
        />
      </div>

      {/* Product Cards */}
      <div
        className={`flex flex-wrap wrapper ${
          filteredData.length < 3 ? "justify-evenly" : "justify-between"
        }`}
      >
        {filteredData.length > 0 ? (
          sortedData
            .slice(0, itemsToShow)
            .map((product, index) => <ProductCard key={index} data={product} />)
        ) : (
          <div className="text-center h-[40vh] flex justify-center items-center text-xl font-normal text-gray-400">
            No items found...
          </div>
        )}
      </div>

      {/* Show More button */}
      {filteredData.length > initialItemsToShow && (
        <div className="flex justify-center mt-4">
          <button
            className="border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-semibold py-2 px-4 rounded"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? " Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
