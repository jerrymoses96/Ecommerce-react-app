import React from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import data from "../../general/json/data.json";

// Importing Components
import About from "./About";
import Details from "./Details";
import ImageSlider from "./ImageSlider";
import Features from "./Features";
import Amenities from "./Amenities";
import Map from "./Map";
import Review from "./Review";

const ViewAccommodation = () => {
  // Extracting ID parameter from URL
  const { id } = useParams();
  const accommodationId = parseInt(id);

  // Finding accommodation by ID
  const filteredAccommodation = data.find(
    (accommodation) => accommodation.id === accommodationId
  );

  return (
    <div className="w-full">
      {filteredAccommodation ? (
        <div>
          {/* Accommodation Details Section */}
          <div className="flex wrapper gap-5 pb-5 border-b border-green-200">
            {/* Image Slider and About Section */}
            <div className="w-[60%]">
              <ImageSlider images={filteredAccommodation.image_url} />
              <About data={filteredAccommodation} />
            </div>

            {/* Details and Features Section */}
            <div className="w-[40%]">
              <div className="mt-10 mb-44 p-5 w-full border h-fit border-green-300 rounded-lg">
                <Details data={filteredAccommodation} />
              </div>
              <Features />
            </div>
          </div>

          {/* Amenities and Map Section */}
          <div className="wrapper py-5 flex">
            <Amenities />
            <Map location={filteredAccommodation.location} />
          </div>

          {/* review section  */}
          <div className="wrapper">
            <Review data={filteredAccommodation.reviews}/>
          </div>
        </div>
      ) : (
        // Displayed if no accommodation found with ID
        <div>No accommodation found with ID: {id}</div>
      )}
    </div>
  );
};

export default ViewAccommodation;
