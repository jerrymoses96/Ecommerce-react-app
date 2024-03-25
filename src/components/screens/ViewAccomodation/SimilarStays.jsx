import React, { useState } from "react";
import data from "../../general/json/data.json";
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Button from "../../general/button/Button";

const SimilarStays = ({ category }) => {
  const [favorites, setFavorites] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Filter data based on category
  const similarStays = data.filter((stay) =>
    stay.categories.includes(category)
  );

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-5">Similar Stays</h2>
        {showAll ? (
          <Button onClick={handleViewLess} label="View Less" />
        ) : (
          similarStays.length > 3 && (
            <Button onClick={handleViewAll} label="View All" />
          )
        )}
      </div>
      <div className="similar-container flex flex-col justify-between  lg:flex-row">
        {similarStays
          .slice(0, showAll ? similarStays.length : 3)
          .map((stay) => (
            <div
              key={stay.id}
              className="flex rounded-xl shadow-md border border-[#E8ECF2] w-[100%] lg:w-[31%]  mb-5"
            >
              <div className="relative">
                <img
                  className="rounded-s-xl h-full object-cover"
                  src={`/${stay.image_url[0]}`}
                  alt="stay image"
                />
                <div
                  className={`bg-[#F5F5F5] absolute top-2 right-2 rounded-full w-6 h-6 flex justify-center items-center ${
                    favorites.includes(stay.id)
                      ? "bg-red-400"
                      : "text-gray-500 hover:bg-red-400"
                  }`}
                  onClick={() => toggleFavorite(stay.id)}
                >
                  <CiHeart size={15} />
                </div>
              </div>
              <div className="p-5 flex flex-col justify-center ">
                <h3 className="font-semibold">{stay.name}</h3>
                <p className="text-sm text-[#787878]">{stay.location}</p>
                <p className="flex items-center mt-2">
                  {stay.average_rating}
                  <IoMdStar size={20} className="text-yellow-500" />
                </p>
                <div className="flex items-baseline">
                  <p className="text-sm text-[#787878] border-r border-gray-300 mt-2 pr-2">
                    <small className="text-xl font-semibold text-[#00C29F]">
                      ${stay.price}
                    </small>
                    /night
                  </p>
                  <div className="pl-2 flex gap-1 items-center">
                    <img
                      width={20}
                      src="/src/assets/images/user.png"
                      alt="user"
                    />
                    <p className="text-sm text-[#787878]">2</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SimilarStays;
