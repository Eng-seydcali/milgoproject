import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-[#100321] border-b border-white mx-auto p-5 flex justify-between items-center relative'>
      <img className='w-32' src={logo} alt="Logo" />
      
      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className='flex gap-8 text-white text-xl'>
          <Link to="/"><li className="hover:text-purple-400">Home</li></Link>
          <Link to="/About"><li className="hover:text-purple-400">About</li></Link>
          <Link to="/Services"><li className="hover:text-purple-400">Services</li></Link>
          <Link to="/Projects"><li className="hover:text-purple-400">Projects</li></Link>
          <Link to="/Contact"><li className="hover:text-purple-400">Contact Us</li></Link>
        </ul>
      </div>
      
      {/* CTA Button */}
      <button className='hidden md:block bg-[#CA01FE] text-white font-medium text-xl px-6 py-2 rounded-xl'>
        Get Started
      </button>
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} className="text-white" /> : <FiMenu size={28} className="text-white" />}
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-18 left-0 w-full bg-[#100321] text-start text-white flex flex-col items-center space-y-6 py-6 md:hidden z-50">
          <Link to="/" onClick={() => setMenuOpen(false)}><li className="hover:text-purple-400">Home</li></Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}><li className="hover:text-purple-400">About</li></Link>
          <Link to="/Services" onClick={() => setMenuOpen(false)}><li className="hover:text-purple-400">Services</li></Link>
          <Link to="/Projects" onClick={() => setMenuOpen(false)}><li className="hover:text-purple-400">Projects</li></Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}><li className="hover:text-purple-400">Contact Us</li></Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
