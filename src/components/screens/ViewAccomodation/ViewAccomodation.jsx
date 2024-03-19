import { useParams } from "react-router-dom";
import data from "../../general/json/data.json";
import ImageSlider from "./ImageSlider";
import About from "./About";
import "../../../App.css";
import Details from "./Details";

const ViewAccomodation = () => {
  const { id } = useParams();
  const accommodationId = parseInt(id);

  // Assuming data is an array of accommodations
  const filteredAccommodation = data.find(
    (accommodation) => accommodation.id === accommodationId
  );
  console.log(filteredAccommodation.image_url);
  return (
    <div className="w-full ">
      {filteredAccommodation ? (
        <div className="flex wrapper gap-5">
          <div className="w-[60%]">
            <ImageSlider images={filteredAccommodation.image_url} />
            <About data={filteredAccommodation} />
          </div>

          <div className="my-10 p-5 border h-fit border-green-300 rounded-lg w-[40%]">
            <Details data={filteredAccommodation} />
          </div>
          {/* Add more details as needed */}
        </div>
      ) : (
        <div>No accommodation found with ID: {id}</div>
      )}
    </div>
  );
};

export default ViewAccomodation;
