import React from 'react';

const FoodCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="font-semibold mb-3 text-red-600">Ksh {price}</p>

        <a
          href="https://wa.me/254708215665"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-600 text-white text-center py-2 rounded hover:bg-green-700"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default FoodCard;
