// Card.jsx
import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 text-center">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
        Tailwind Card
      </h2>
      <p className="text-gray-600 mb-4">
        This is a simple responsive card using Tailwind CSS in React.
      </p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Read More
      </button>
    </div>
  );
};

export default Card;