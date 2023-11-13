// Footer.tsx
import React from 'react';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Cooper and Blake</h2>
          <p className="text-gray-400">
            We are convinced that with us, it’s possible!
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-blue-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form>
            <label className="block text-gray-400 mb-2">Your Email:</label>
            <input
              type="email"
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <label className="block text-gray-400 mb-2">Your Message:</label>
            <textarea
              rows={3}
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 Cooper and Blake. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
