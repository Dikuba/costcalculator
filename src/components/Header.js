// Header.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-yellow-200 bg-opacity-50 shadow-md sticky-header">
      <div className="container mx-auto py-2 px-8 flex justify-between items-center">
        <div className="text-xl font-bold">Cost Calculator</div>
        <nav className="hidden md:flex ml-auto space-x-4">
        <a href="/" className="text-gray-700 no-underline hover:text-yellow-600 cursor-pointer">Home</a>
          <Link to="faq" smooth={true} duration={500} className="text-gray-700 no-underline hover:text-yellow-600 cursor-pointer">FAQ</Link>
          <Link to="about" smooth={true} duration={500} className="text-gray-700 no-underline hover:text-yellow-600 cursor-pointer">About us</Link>
          <Link to="contact" smooth={true} duration={500} className="text-gray-700 no-underline hover:text-yellow-600 cursor-pointer">Contact</Link>
        </nav>
        <div className="hidden md:flex ml-4 space-x-4">
          <a href="/login">
            <button className="bg-gray-50 text-gray-700 py-2 px-4 rounded no-underline hover:bg-yellow-500">Log in</button>
          </a>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400">Get started</button>
        </div>
        <button className="md:hidden ml-auto" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="text-gray-700" size={24} /> : <FaBars className="text-gray-700" size={24} />}
        </button>
        {menuOpen && (
          <div className="md:hidden flex flex-col mt-4 space-y-4 w-full">
            <a href="/" className="text-gray-700 no-underline hover:text-yellow-600 cursor-pointer">Home</a>
            <Link to="faq" smooth={true} duration={500} className="text-gray-700 no-underline hover:text-yellow-600 cursor-pointer">FAQ</Link>
            <Link to="about" smooth={true} duration={500} className="text-gray-700 no-underline hover:text-yellow-600 cursor-pointer">About us</Link>
            <Link to="contact" smooth={true} duration={500} className="text-gray-700 no-underline hover:text-yellow-600 cursor-pointer">Contact</Link>
            <a href="/login">
              <button className="bg-gray-50 text-gray-700 py-2 px-4 rounded no-underline hover:bg-yellow-500">Log in</button>
            </a>
            <a href="/signup">  <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400">Register</button></a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
