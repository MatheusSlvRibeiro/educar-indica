import React from "react";

const SealCard = ({ image, title, description }) => {
  return (
    <div className="bg-white text-gray-900 p-6 rounded-xl shadow-md">
      <div className="flex flex-col items-start gap-1 mb-3">
        <img src={image} alt={title} className="w-25 h-25 mx-auto object-contain max-w-[100px]" />
        <h3 className="font-semibold text-gray-800 max-w-[300px] text-[1.5rem]">{title}</h3>
      </div>
      <p className="text-[1rem] text-gray-700">{description}</p>
    </div>
  );
};

export default SealCard;
