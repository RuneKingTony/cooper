import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import about from '../../assets/images/height.jpeg';

const AboutPage: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [controls]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-white-500 min-h-screen flex items-center justify-center pt-32">
      <motion.div
        className="bg-white p-8 md:p-16 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center w-4/5 overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        {/* Left side */}
        <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0 text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-yellow-400">About Us</h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-500">
            Cooper&Blake is a professional services Real Estate firm. We create value for our clientele by articulating and servicing their objectives.
            <br />
            Fully abreast with the housing sector and real estate market, our team is girded with germane advisory competencies.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
           <a href="/Service"> Explore Our Services</a>
          </button>
        </div>
        {/* Right side */}
        <div className="md:w-1/2 relative overflow-hidden">
          {/* Add an animated image here */}
          <motion.img
            src={about}
            alt="Animated Image"
            className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
          />
          {/* Overlay for an extra effect */}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
