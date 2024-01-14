import React from "react";

const FrontCard = ({ handleFlip, text }) => {
  return (
    <div
      className="w-full h-full bg-blue-500 text-3xl text-white rounded-md text-center p-10 flex justify-center items-center"
      onClick={handleFlip}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default FrontCard;
