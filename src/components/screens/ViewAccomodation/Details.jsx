import { IoMdStar } from "react-icons/io";

const Details = ({ data }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">{data.name}</h2>
      <p className="text-sm">{data.location}</p>
      <div className="flex items-center gap-1 mt-1">
        <p className="flex items-center pr-1 border-r border-r-green-100">
          {data.average_rating}
          <IoMdStar className="text-yellow-500" />
        </p>
        <span className="text-[#00C29F] text-sm underline">
          {data.total_reviews} Reviews
        </span>
      </div>

      <p className="text-[#171E1D] font-light mt-3">Welcome to our {data.description}</p>
      <div className="flex justify-between items-center mt-5">
        <p className="text-sm text-[#787878]">
          <small className="text-2xl font-bold text-black">
            ${data.price}
          </small>
          /night
        </p>
        <img className="w-[30%]" src="/src/assets\images\Frame 105.png" alt="image" />
      </div>
      <button className="bg-[#00C29F] w-full py-3 text-white font-semibold rounded-md shadow-md my-4">
        Book this home
      </button>
      <div>
        <p className="text-[#787878]">Hosted by :</p>
        <div className="flex justify-between items-center mt-3 border-t border-t-green-100 pt-2">
          <div className="flex items-center gap-2">
            <img src="/src\assets\images\Ellipse 2.png" alt="image" />
            <div>
              <p className="font-semibold">Michelle Ward</p>
              <p className="text-[#7A7A7A] text-sm">Joined in may 2021</p>
            </div>
          </div>

          <img className="w-[20%]" src="/src\assets\images\Frame 23.png" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Details;
