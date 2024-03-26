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
    stay.categories.includes(category),
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
      <div className="flex items-center justify-between">
        <h2 className="mb-5 text-2xl font-semibold">Similar Stays</h2>
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
              className="mb-5 flex w-[100%] rounded-xl border border-[#E8ECF2] shadow-md  lg:w-[31%]"
            >
              <div className="relative">
                <img
                  className="h-full rounded-s-xl object-cover"
                  src={`/${stay.image_url[0]}`}
                  alt="stay image"
                />
                <div
                  className={`absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#F5F5F5] ${
                    favorites.includes(stay.id)
                      ? "bg-red-400"
                      : "text-gray-500 hover:bg-red-400"
                  }`}
                  onClick={() => toggleFavorite(stay.id)}
                >
                  <CiHeart size={15} />
                </div>
              </div>
              <div className="flex flex-col justify-center p-5 ">
                <h3 className="font-semibold">{stay.name}</h3>
                <p className="text-sm text-[#787878]">{stay.location}</p>
                <p className="mt-2 flex items-center">
                  {stay.average_rating}
                  <IoMdStar size={20} className="text-yellow-500" />
                </p>
                <div className="flex items-baseline">
                  <p className="mt-2 border-r border-gray-300 pr-2 text-sm text-[#787878]">
                    <small className="text-xl font-semibold text-[#00C29F]">
                      ${stay.price}
                    </small>
                    /night
                  </p>
                  <div className="flex items-center gap-1 pl-2">
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
