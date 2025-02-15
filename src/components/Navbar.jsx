import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 ">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline"> AM .</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#service" className="hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contacts" className="hover:text-gray-400">
            Contacts
          </a>
        </div>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r 
      from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full mx-2"
        >
          Connect Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
