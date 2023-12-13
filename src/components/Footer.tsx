// Footer.tsx
import React from 'react';
import { useState } from 'react';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailJs = async () => {
    try {
      await emailjs.sendForm('service_zf3knmi', 'template_nucauag', { email, message } as any, 'YOUR_USER_ID');

      console.log('Email sent successfully');
      // Add any additional logic or UI updates here
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle the error or provide user feedback
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // You can add client-side processing here if needed

      // Choose the method you want to use (EmailJS)
      await handleEmailJs();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error or provide user feedback
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Cooper & Blake</h2>
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
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-blue-500">
                Listings
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
            <a href="https://web.facebook.com/cooperandblake1?_rdc=1&_rdr" className="text-gray-400 hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com/cooperandblake" className="text-gray-400 hover:text-blue-500">
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
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-400 mb-2">Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 text-gray-800 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <label className="block text-gray-400 mb-2">Your Message:</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-gray-800 p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 Cooper & Blake. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
