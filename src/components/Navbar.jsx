import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black bg-opacity-70 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold"><Link to="/">Winnie's</Link></div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <Link to="/menu" className="hover:text-red-600 transition-colors">Menu</Link>
          <Link to="/gallery" className="hover:text-red-600 transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="hover:text-red-600 transition-colors" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/menu" className="hover:text-red-600 transition-colors" onClick={() => setOpen(false)}>Menu</Link>
          <Link to="/gallery" className="hover:text-red-600 transition-colors" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/contact" className="hover:text-red-600 transition-colors" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
