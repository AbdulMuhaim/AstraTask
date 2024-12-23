import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pdf-button p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white font-semibold text-xl uppercase">
          <p>Astro Industries</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 font-semibold">
          <p onClick={()=>navigate('/')} className="text-white hover:text-gray-300 cursor-pointer">
            Home
          </p>
          <p onClick={()=>navigate('/list')} className="text-white hover:text-gray-300 cursor-pointer">
            Asset Handovered List
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
