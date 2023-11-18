// src/components/ContactUs.tsx

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Update with your desired latitude
  lng: -122.4194, // Update with your desired longitude
};

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto my-8 pt-32">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Box with Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Additional Information</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo eu urna
            porttitor cursus sit amet id libero. Ut gravida ex ac gravida posuere.
          </p>
        </div>

        {/* Right Box with Contact Information */}
        <div className="mb-8">
          {/* Section 1: Phone Number */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Phone Number
            </h2>
            <p className="text-lg">(234) 905 444 5444</p>
          </div>

          {/* Section 2: Email */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </h2>
            <p className="text-lg">info@cooperandblake.com</p>
          </div>

          {/* Section 3: Address */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
              Address
            </h2>
            <p className="text-lg">47 Aguyi Ironsi Street, Maitama, Abuja.</p>
          </div>

          {/* Section 4: Working Hours */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Working Hours
            </h2>
            <p className="text-lg">Monday - Friday: 9 AM - 5 PM</p>
          </div>
        </div>
      </div>

      {/* Section 5: Map */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-8 text-primary">Location</h2>
        <LoadScript googleMapsApiKey="AIzaSyD-AQLG7PO6eoDWOlQUU0GyW6Q0sEyKTvg">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ContactUs;
