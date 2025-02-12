import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold tracking-wide">
          TaskManager
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300">
            Home
          </Link>
          <Link to="/tasks" className="text-white hover:text-gray-200 transition duration-300">
            Tasks
          </Link>
          <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-gray-200 transition duration-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};


