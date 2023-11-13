// src/Property.tsx
import  { useState } from "react";

interface PropertyProps {
  image: string;
  price: string;
  size: string;
  location: string;
  description: string;
}

const PropertyCard: React.FC<PropertyProps> = ({
  image,
  price,
  size,
  location,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`property ${expanded ? "expanded" : ""}`}
      onClick={handleToggleExpand}
    >
      <img src={image} alt="Property" className="property-image" />
      <div className="property-details">
        <h2>{price}</h2>
        <p>{size}</p>
        <p>{location}</p>
        <p>{description}</p>
        {expanded && <button>Show Less</button>}
      </div>
    </div>
  );
};

export default PropertyCard;
