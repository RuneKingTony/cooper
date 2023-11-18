// PropertyListingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard'; // Assuming you have a PropertyCard component

const PropertyListing: React.FC = () => {
  // Sample property data (replace with your actual data)
  const properties = [
    {
      id: 1,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_6d31306bd3a57e138bedf75827c98d87.jpg',
      description: 'SUNRISE HILLS (SRH)',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: '',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: 'property2.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: 'property2.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: 'property2.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: 'property2.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: 'property2.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: 'property2.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: 'property2.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    
    {
      id: 2,
      image: 'property2.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: 'property2.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    // Add more properties as needed
  ];

  return (
    <div className="bg-gradient-to-b from-gray-700 to-white-500">
      <div className="container mx-auto p-4 pt-32">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">FEATURED PROPERTIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
