
import PropertyCard from './PropertyListing';

import './PropertyCard.css'

const Property: React.FC = () => {

    const properties = [
      {
        image: "https://cooperandblake.com/wp-content/uploads/2021/05/DSCh_9706-2.jpg",
        price: "$500,000",
        size: "2000 sqft",
        location: "123 Main St, Cityville",
        description: "A beautiful property description.",
      },
      {
        image: "path/to/image1.jpg",
        price: "$500,000",
        size: "2000 sqft",
        location: "123 Main St, Cityville",
        description: "A beautiful property description.",
      },
      {
        image: "path/to/image1.jpg",
        price: "$500,000",
        size: "2000 sqft",
        location: "123 Main St, Cityville",
        description: "A beautiful property description.",
      },
      // Add more properties as needed
    ];
  
    return (
      <div className="app">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    );
};

export default Property;
