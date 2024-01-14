import React from "react";

const BackCard = ({ handleFlip, text }) => {
  return (
    <div
      className="w-full h-full bg-frdark text-3xl text-white rounded-md text-center p-10 flex justify-center items-center"
      onClick={handleFlip}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default BackCard;
