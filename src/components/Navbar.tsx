import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cbd.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos < 100;
      setIsVisible(visible);
      setIsScrolled(currentScrollPos > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const minimizeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar1 ${isVisible ? '' : 'scrolled'}`}>
      <div className="navbar-content1 container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} className="navbar-logo1 object-contain h-12 mr-4" alt="Logo" />
        </div>
        <ul className="navbar-links1 hidden md:flex space-x-4 text-yellow-500">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Service">Services</Link></li>
          <li><Link to="/Listing">Listings</Link></li>
          <li><Link to="/ContactUs">Contact</Link></li>
        </ul>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className={`text-white focus:outline-none ${isScrolled ? 'bg-black' : 'bg-transparent'}`}
          >
            <svg
              className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-black'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-0 left-0 md:hidden bg-gray-800 w-full h-68 transform origin-top ${isMobileMenuOpen ? 'scale-y-100 translate-x-0' : 'scale-y-0 translate-x-full'}`}>
        <div className={`flex flex-col items-start p-4 w-full ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ transformOrigin: 'top right' }}>
          {isMobileMenuOpen && (
            <button
              onClick={minimizeMobileMenu}
              className="mt-2 focus:outline-none transform transition-transform duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}
          <br/>
          <ul className="navbar-links1 flex flex-col items-start space-y-4 text-lg">
          <li><Link to="/" className="text-yellow-500 hover:text-indigo-600 ml-0">Home</Link></li>
            <li><Link to="/About" className="text-yellow-500 hover:text-indigo-600 ml-0">About</Link></li>
            <li><Link to="/Service" className="text-yellow-500 hover:text-indigo-600 ml-0">Service</Link></li>
            <li><Link to="/Listing" className="text-yellow-500 hover:text-indigo-600 ml-0">Projects</Link></li>
            <li><Link to="/ContactUs" className="text-yellow-500 hover:text-indigo-600 ml-0">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
