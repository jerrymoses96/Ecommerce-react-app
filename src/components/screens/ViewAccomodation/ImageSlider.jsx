import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="image-slider-container my-10 w-full overflow-hidden rounded-lg shadow-md">
      <div className="main-image-container relative h-72 sm:h-96">
        {/* Displaying the selected image at the top */}
        <img
          className="main-image h-full w-full rounded-lg object-cover"
          src={`/${images[selectedImageIndex]}`}
          alt={`image ${selectedImageIndex}`}
        />
      </div>
      <div
        className="thumbnail-container mt-4 flex justify-between gap-2 overflow-x-auto overflow-y-hidden rounded-lg"
        style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
      >
        {/* Mapping over the images array to display all thumbnail images */}
        {images?.map((imageUrl, index) => (
          <img
            key={index}
            className={
              "thumbnail-image h-[100px] w-[200px] cursor-pointer  shadow-xl"
            }
            src={`/${imageUrl}`}
            alt={`image ${index}`}
            // Handling click on thumbnail image
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
