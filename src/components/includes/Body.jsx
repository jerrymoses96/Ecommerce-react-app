import data from "../general/json/data.json";
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const Body = () => {
  return (
    <div className="flex flex-wrap wrapper justify-between  my-[100px] ">
      {data.map((item) => (
        <div
          className="rounded-xl shadow-lg w-[23.5%] relative"
          key={item.name}
        >
          <div className="w-[100%] ">
            <img className="w-[100%] rounded-t-xl" src={item.image_url} />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h1 className="text-base font-semibold">{item.name}</h1>
                <p className="text-sm font-normal">{item.location}</p>
              </div>

              <p className="flex items-center ">
                {item.average_rating}
                <IoMdStar className="text-yellow-500" />
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-[#787878]">
                <small className="text-xl font-semibold text-black">
                  ${item.price}
                </small>
                /night
              </p>
              

              <p>
                {item.price_chart && (
                  <img src="src\assets\images\best time.png" />
                )}
              </p>
            </div>
          </div>
          <div className="bg-[#F5F5F5] absolute top-4 right-4 rounded-full w-7 h-7 flex justify-center items-center hover:bg-red-400">
            <CiHeart />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
