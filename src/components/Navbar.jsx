import React from 'react';

export default function Navbar() {
  return (
    /* Updated with sticky positioning and a subtle blurred background to look premium when scrolling */
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto sticky top-0 bg-[#0d0b14]/80 backdrop-blur-md z-50 w-full">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-serif">
        Rashmi
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
        <a href="#home" className="text-white hover:text-pink-400 transition">Home</a>
        <a href="#about" className="hover:text-pink-400 transition">About</a>
        <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
        <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
        <a href="#education" className="hover:text-pink-400 transition">Education</a>
        <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
      </div>

      {/* Action Button - Updated with a highlighted bright/light pink gradient theme */}
      <a 
        href="#contact" 
        className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-400 to-pink-500 rounded-full hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg shadow-pink-500/20 inline-block text-center cursor-pointer"
      >
        Hire Me
      </a>
    </nav>
  );
}