import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };


  const viewProduct = (id) => {
    navigate(`/viewaccomodation/${id}`);
  }

  return (

    <>
    
      <div
        className="rounded-xl shadow-md w-[23.5%] relative mb-7"
        key={data.name}
        onClick={() => viewProduct(data.id)}
      >
        <div className="w-[100%]">
          <img
            className="w-[100%] rounded-t-xl"
            src={data.image_url[0]}
            alt={data.name}
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h1 className="text-base font-semibold">{data.name}</h1>
              <p className="text-sm font-normal">{data.location}</p>
            </div>

            <p className="flex items-center">
              {data.average_rating}
              <IoMdStar className="text-yellow-500" />
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-[#787878]">
              <small className="text-xl font-semibold text-black">
                ${data.price}
              </small>
              /night
            </p>

            <p>
              {data.price_chart && (
                <img src="src\assets\images\best time.png" alt="Best Time" />
              )}
            </p>
          </div>
        </div>
        <div
          className={`bg-[#F5F5F5] absolute top-4 right-4 rounded-full w-7 h-7 flex justify-center items-center ${
            isFavorite ? "bg-red-400" : "text-gray-500 hover:bg-red-400"
          }`}
          onClick={toggleFavorite}
        >
          <CiHeart />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
