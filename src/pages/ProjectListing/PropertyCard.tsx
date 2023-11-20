// PropertyCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: {
    id: number;
    image: string;
    description: string;
    details: string;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={property.image} alt="Property" className="mb-2 w-full h-40 object-cover" />
    
      <p className="text-gray-800">{property.description}</p>
      <p className="text-gray-800">{property.details}</p>
      <Link to={`/property/${property.id}`} className="text-yellow-500 mt-2 block">
        Read More
      </Link>
    </div>
  );
};

export default PropertyCard;
