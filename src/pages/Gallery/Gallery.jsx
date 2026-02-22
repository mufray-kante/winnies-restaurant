import React from "react";

const images = [
  "/src/assets/images/gallery1.jpg",
  "/src/assets/images/gallery2.jpg",
  "/src/assets/images/gallery3.jpg"
];

const Gallery = () => (
  <div className="min-h-screen bg-gray-50 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {images.map((img, idx) => (
      <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
        <img src={img} alt="Gallery image" className="w-full h-full object-cover transform hover:scale-105 transition-transform" />
      </div>
    ))}
  </div>
);

export default Gallery;
