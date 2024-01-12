import React from "react";

const BackCard = ({ setFlip, flip }) => {
  return (
    <div
      className="w-96 h-96 bg-blue-500 text-3xl text-white rounded-md text-center p-10"
      onClick={() => setFlip(!flip)}
    >
      <h2>hello back</h2>
    </div>
  );
};

export default BackCard;
