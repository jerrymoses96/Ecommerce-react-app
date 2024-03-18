// ProductCard.jsx
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ data }) => {
  return (
    <>
      <div
        className="rounded-xl shadow-md w-[23.5%] relative mb-7"
        key={data.name}
      >
        <div className="w-[100%]">
          <img className="w-[100%] rounded-t-xl" src={data.image_url} alt={data.name} />
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
        <div className="bg-[#F5F5F5] absolute top-4 right-4 rounded-full w-7 h-7 flex justify-center items-center hover:bg-red-400">
          <CiHeart />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
