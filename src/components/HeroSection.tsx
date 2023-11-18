// src/components/HeroSection.tsx
import React, { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the fade-in after 2 seconds
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="imgg relative h-screen flex items-center justify-center bg-cover">
      <div className="dark-overlay"></div> {/* Dark overlay for the image */}
      <div
        className={`text-center p-20 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 text-white w-full p-4 md:p-8 lg:p-16 relative z-10`}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-100 text-left">
          Connect With Us
        </p>
        <br />
        <h1 className="text-4xl md:text-7xl lg:text-7xl mb-4 text-left">
          Find Your <br />
          Home With <br />
          Cooper & Blake
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 text-left">
          Welcome to the best
          <br />
          real estate platform
          <br />
          where you can
          <br />
          find
          your dream
          home!
        </p>
        {/* Additional real estate company content */}
      </div>
    </div>
  );
};

export default HeroSection;
