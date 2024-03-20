import React, { useState } from "react";
import data from "../../general/json/data.json";
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const SimilarStays = ({ category }) => {
  const [favorites, setFavorites] = useState([]);

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

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Similar Stays</h2>
      <div className="flex justify-between">
        {similarStays.map((stay) => (
          <div
            key={stay.id}
            className="flex rounded-xl shadow-md border border-[#E8ECF2] w-[31%]"
          >
            <div className="relative">
              <img
                className="rounded-s-xl"
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
            <div className="p-5">
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
