import React from "react";

const ImageToggle = ({ image1Src, image2Src, active, onClick }) => {
  return (
    <div className="flex gap-2">
      <img
        src={image1Src}
        alt="Image 1"
        className={active ? "active" : ""}
        onClick={onClick}
      />
      <img
        src={image2Src}
        alt="Image 2"
        className={!active ? "active" : ""}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageToggle;
