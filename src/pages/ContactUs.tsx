// src/components/ContactUs.tsx

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 9.085575981365597,
  lng: 7.483783638051128,
};

const location1 = {
  lat: 9.075123456789,
  lng: 7.490987654321,
};

const location2 = {
  lat: 9.095987654321,
  lng: 7.478654321987,
};

const ContactUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.div ref={ref} style={fadeIn} className='bg-gradient-to-b from-gray-800 to-white-500'>
      <div className="container mx-auto my- pt-32">
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-500">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Box with Text */}
          <animated.div style={fadeIn} className="mb-8 px-4 md:px-0">
            <p className="pt-4 pl-4 text-5xl font-bold text-white">
              Where You Can <br /> Find US
            </p>
          </animated.div>

          {/* Right Box with Contact Information */}
          <animated.div style={fadeIn} className="mb-8 px-4 md:px-0 pt-4">
            {/* Section 1: Phone Number */}
            <div className="mb-4 text-white">
              <h2 className="text-2xl font-semibold mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-yellow-500" />
                Phone Number
              </h2>
              <p className="text-lg ml-6">(234) 905 444 5444</p>
            </div>
            <br />
            {/* Section 2: Email */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2 text-white">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-yellow-500" />
                Email
              </h2>
              <p className="text-lg text-white ml-6">info@cooperandblake.com</p>
            </div>
            <br />
            {/* Section 3: Address */}
            <div className="mb-4 text-white">
              <h2 className="text-2xl font-semibold mb-2">
                <FontAwesomeIcon icon={faMapMarker} className="mr-2 text-yellow-500" />
                Address
              </h2>
              <p className="text-lg ml-6">47 Aguyi Ironsi Street, Maitama, Abuja.</p>
            </div>
            <br />
            {/* Section 4: Working Hours */}
            <div className="mb-4 text-white">
              <h2 className="text-2xl font-semibold mb-2">
                <FontAwesomeIcon icon={faClock} className="mr-2 text-yellow-500" />
                Working Hours
              </h2>
              <p className="text-lg">Monday - Friday: 9 AM - 5 PM</p>
            </div>
          </animated.div>
        </div>

        {/* Section 5: Map */}
        <animated.div style={fadeIn} className="mt-12">
          <h2 className="text-5xl font-semibold mb-8 text-yellow-400 p-4">Location</h2>
          <LoadScript googleMapsApiKey="AIzaSyD-AQLG7PO6eoDWOlQUU0GyW6Q0sEyKTvg">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
              {/* Original Location */}
              <Marker position={center} />

              {/* Additional Locations */}
              <Marker position={location1} />
              <Marker position={location2} />
            </GoogleMap>
          </LoadScript>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default ContactUs;
