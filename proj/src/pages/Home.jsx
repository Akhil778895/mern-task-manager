import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to Task Manager!
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center px-4">
        Organize your tasks, boost your productivity, and stay on top of your goals.
      </p>
      <div className="space-x-4">
        <Link
          to="/register"
          className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
        >
          Get Started
        </Link>
        <Link
          to="/tasks"
          className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
        >
          View Tasks
        </Link>
      </div>
    </div>
  );
};


