import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../output.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-900 fixed top-0 left-0 right-0 shadow-lg z-50">
      <div className="flex items-center justify-between h-16 px-6">
        <p className="text-white text-lg font-bold">Employee Management System</p>

        {/* Hamburger icon for mobile view */}
        <button 
          onClick={toggleMenu} 
          className="text-white md:hidden focus:outline-none"
        >
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/employees" className="text-white hover:text-gray-300">Emp List</Link>
          <Link to="/addEmployee" className="text-white hover:text-gray-300">Add Emp</Link>
          <Link to="/Docs" className="text-white hover:text-gray-300">Docs</Link>
        </div>
      </div>

      {/* Collapsible Navigation Links for Mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900`}>
        <nav className="flex flex-col items-center p-4 space-y-2">
          <Link to="/" className="text-white hover:text-gray-300 w-full text-center" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/employeeslist" className="text-white hover:text-gray-300 py-2 text-center" onClick={handleLinkClick}>Emp List</Link>
          <Link to="/addEmployee" className="text-white hover:text-gray-300 w-full text-center" onClick={() => setIsOpen(false)}>Add Emp</Link>
          <Link to="/Docs" className="text-white hover:text-gray-300 w-full text-center" onClick={() => setIsOpen(false)}>Docs</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
