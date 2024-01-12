import React from "react";

const BackCard = ({ handleFlip, text }) => {
  return (
    <div
      className="w-96 h-96 bg-blue-500 text-3xl text-white rounded-md text-center p-10"
      onClick={handleFlip}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default BackCard;
