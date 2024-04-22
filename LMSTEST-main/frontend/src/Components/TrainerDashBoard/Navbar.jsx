import React from "react";
import { RiHome2Line, RiUserLine, RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Torry Harris</div>

        {/* Search Element */}
        <div className="flex items-centre justify-center relative">
          <input
            type="text"
            placeholder="text..."
            className="bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none"
          />
          <div className="flex items-centre space-x-5">
            <button className="hover:text-gray-300">
              <RiHome2Line size={20} />
            </button>
            <button className="hover:text-gray-300">
              <RiUserLine size={20} />
            </button>
            <button className="hover:text-gray-300">
              <RiLogoutCircleLine size={20} />
            </button>
          </div>
          <button className="absolute right-15 top-0 mt-2 mr-0">
            {/* Search Icon (You can replace it with your icon) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
                d="M15 15l-5-5-5 5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
