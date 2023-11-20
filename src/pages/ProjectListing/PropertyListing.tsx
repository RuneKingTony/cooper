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
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_c9e593b4030900bac3fdadbae5fb7f21.jpg',
      description: 'CITI HEIGHTS',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 3,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_8500d94c612af958595b9f2923bfe0d3.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 4,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_35f15421b29132d1f2758d203d5438df.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 5,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_65458a439bd44d2eebb76a1a89e091cf.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 6,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_b9fd34ed6e4d89818bdcb3993f22f9ae.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 7,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_808376318dc6ee8194b2165834eca9c1.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 8,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_a0c24ab6ece1c4b89c771facbf4a07e3.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 9,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_a0c24ab6ece1c4b89c771facbf4a07e3.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    
    {
      id: 10,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_8fbdb7fb36f29723365cb7b0a9392f60.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 11,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_76c34dd0a63f4997e198a192bd170446.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 12,
      image: 'https://cooperandblake.com/wp-content/uploads/ewpt_cache/1400x1120_90_1_c_FFFFFF_6309bfaa4a894f02b4ca0a9c98b969c8.jpg',
      description: 'Spacious Family Home with Garden',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    // Add more properties as needed
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-white-500">
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
