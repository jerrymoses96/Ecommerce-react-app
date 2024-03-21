import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <button 
      className="text-[#00C29F] font-semibold hover:text-green-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
