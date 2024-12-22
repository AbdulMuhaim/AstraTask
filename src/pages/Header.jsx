import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white font-semibold text-xl">
          <a href="/">Astro Industries</a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/form" className="text-white hover:text-gray-300">
            Asset Handover Form
          </a>
          <a href="/list" className="text-white hover:text-gray-300">
            Asset Handover List
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
