import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  // Load favorite status from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setIsFavorite(storedFavorites[data.id] || false);
  }, [data.id]);

  const toggleFavorite = (event) => {
    event.stopPropagation();
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    const updatedFavorites = { ...storedFavorites, [data.id]: !isFavorite };
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
    toast.success(
      !isFavorite ? "Added to favorites" : "Removed from favorites"
    );
  };

  const viewProduct = (id) => {
    navigate(`/viewaccomodation/${id}`);
  };

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
          onClick={(event) => toggleFavorite(event)}
        >
          <CiHeart />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
