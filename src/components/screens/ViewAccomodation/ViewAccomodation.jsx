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
import SimilarStays from "./SimilarStays";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import { Helmet } from "react-helmet";

const ViewAccommodation = () => {
  // Extracting ID parameter from URL
  const { id } = useParams();
  const accommodationId = parseInt(id);

  // Finding accommodation by ID
  const filteredAccommodation = data.find(
    (accommodation) => accommodation.id === accommodationId,
  );

  return (
    <div className="w-full">
      <Helmet>
        <title>{filteredAccommodation.name}</title>
      </Helmet>

      <Header />
      {filteredAccommodation ? (
        <div>
          {/* Accommodation Details Section */}
          <div className=" wrapper gap-5 border-b border-green-200 pb-5">
            {/* Image Slider and About Section */}
            <div className="flex w-[100%] flex-col gap-5 lg:flex-row">
              <div className="w-[100%] lg:w-[60%]">
                <ImageSlider images={filteredAccommodation.image_url} />
              </div>
              <div className=" mt-0 h-fit w-[100%] rounded-lg   border border-green-300 px-5 py-10 lg:mt-10 lg:w-[40%]">
                <Details data={filteredAccommodation} />
              </div>
            </div>

            {/* Details and Features Section */}
            <div className="mt-10 flex-col lg:mt-0 lg:flex lg:flex-row">
              <div className="w-full lg:w-[60%]">
                <About data={filteredAccommodation} />
              </div>
              <div className="w-full lg:w-[40%]">
                <Features />
              </div>
            </div>
          </div>

          {/* Amenities and Map Section */}
          <div className="wrapper justify-between flex flex-col py-5 lg:flex-row">
            <Amenities />
            <Map location={filteredAccommodation.location} />
          </div>

          {/* review section  */}
          <div className="wrapper">
            <Review data={filteredAccommodation.reviews} />
          </div>
          <div className="wrapper pb-16">
            <SimilarStays category={filteredAccommodation.categories} />
          </div>
          <Footer />
        </div>
      ) : (
        // Displayed if no accommodation found with ID
        <div>No accommodation found with ID: {id}</div>
      )}
    </div>
  );
};

export default ViewAccommodation;
