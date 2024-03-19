import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="image-slider-container w-full my-10 rounded-lg overflow-hidden shadow-md">
      <div className="main-image-container h-96 relative">
        {/* Displaying the selected image at the top */}
        <img
          className="main-image object-cover w-full h-full rounded-lg"
          src={`/${images[selectedImageIndex]}`}
          alt={`image ${selectedImageIndex}`}
        />
      </div>
      <div className="thumbnail-container flex justify-between mt-4 overflow-x-auto">
        {/* Mapping over the images array to display all thumbnail images */}
        {images?.map((imageUrl, index) => (
          <img
            key={index}
            className={`thumbnail-image w-[125px] h-auto cursor-pointer rounded-lg shadow-xl  ${
              index === selectedImageIndex ? 'opacity-100' : 'opacity-50 hover:opacity-100'
            }`}
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
