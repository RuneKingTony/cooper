import { useState, useEffect } from 'react';
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

      // Change button color based on scroll position
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
        <ul className="navbar-links1 hidden md:flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <Link to="/Listing"><li>Projects</li></Link>
          <li><a href="#">Contact</a></li>
        </ul>
        {/* Mobile menu button */}
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
      <div className={`fixed top-0 right-0 md:hidden ${isScrolled ? 'bg-black' : 'bg-transparent'} transition-transform duration-300 transform origin-top ${isMobileMenuOpen ? 'scale-y-100 translate-x-0' : 'scale-y-0 translate-x-full'}`}>
        <ul className="navbar-links1 flex flex-col items-center space-y-4 p-4">
          <li><a href="/">Home</a></li>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Listing"><li>Projects</li></Link>
          <li><a href="#">Contact</a></li>
        </ul>
        {/* Minimize button */}
        {isMobileMenuOpen && (
          <button
            onClick={minimizeMobileMenu}
            className="text-white mt-2 focus:outline-none absolute top-2 right-2"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
