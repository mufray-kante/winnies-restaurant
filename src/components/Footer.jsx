import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-80 text-white mt-12 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Winnie's Restaurant. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <Link to="/menu" className="hover:text-red-600 transition-colors">Menu</Link>
          <Link to="/gallery" className="hover:text-red-600 transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
