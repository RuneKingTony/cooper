import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <div>Error: Property ID not provided</div>;
  }

  // Sample property data (replace with your actual data)
  const properties = [
    {
      id: 1,
      location: 'SUNRISE HILLS (SRH)',
      mapUrl: 'https://maps.example.com/1',
      images: [
        'https://cooperandblake.com/wp-content/uploads/2021/05/DSCh_9706-2.jpg',
        'https://cooperandblake.com/wp-content/uploads/ewpt_cache/770x500_90_1_c_FFFFFF_e0b9506cd239dfcc2f3675774576999f.jpg',
        'https://cooperandblake.com/wp-content/uploads/ewpt_cache/770x500_90_1_c_FFFFFF_98867b1742d9e4f7f046e6bf946d355b.jpg',
        'https://cooperandblake.com/wp-content/uploads/ewpt_cache/770x500_90_1_c_FFFFFF_e157a8a9be49795436c210f57c2ee2cb.jpg',
      ],
      detailedDescription: '“Live, Work and Play” at Sunrise hills; a development well-crafted into the beautiful purlieu of Asokoro District, Abuja. Sunrise Hills boasts of generous green areas woven into undulating plains, swimming pools, outdoor play area, maids’ quarters’ et al…',
    },
    // Add more properties as needed
  ];

  const property = properties.find((prop) => prop.id === parseInt(id!, 10));

  if (!property) {
    return <div>Error: Property not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openModal = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsZoomed(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % property.images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(property.images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + property.images.length) % property.images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(property.images[prevIndex]);
  };

  // Updated Slick carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Set the number of slides to show at once for laptop
    slidesToScroll: 1,
    nextArrow: <button className="slick-next text-white bg-gray-800">Next</button>,
    prevArrow: <button className="slick-prev text-white bg-gray-800">Prev</button>,
    autoplay: true,
    autoplaySpeed: 5000, // Set the duration for each slide
  };

  const mobileCarouselSettings = {
    ...carouselSettings,
    slidesToShow: 3, // Override the number of slides for mobile
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-white-500 min-h-screen flex items-center justify-center">
      <div className="container  p-4 pt-16">
        <div className="bg-gray-200 p-8 rounded-lg shadow-md relative">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">Property Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-4">
              <img
                src={property.images[0]}
                alt="Main Property Image"
                className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-800 md:mb-0"
              />
            </div>

            <div className="relative">
              <p className="text-yellow-500 mb-2 text-4xl font-bold mt-5">{property.location}</p>
              <p className="text-gray-800 text-2xl leading-relaxed mb-4">{property.detailedDescription}</p>

              {!isZoomed && (
                <>
                  <Slider {...carouselSettings} className="md:hidden">
                    {property.images.map((image, index) => (
                      <div key={index} className="cursor-pointer" onClick={() => openModal(image, index)}>
                        <img
                          src={image}
                          alt={`Property Image ${index + 1}`}
                          className="w-full h-32 object-cover mb-2"
                        />
                      </div>
                    ))}
                  </Slider>

                  <Slider {...mobileCarouselSettings} className="hidden md:block absolute bottom-0 right-0 left-0 mx-auto mb-4">
                    {property.images.map((image, index) => (
                      <div key={index} className="cursor-pointer" onClick={() => openModal(image, index)}>
                        <img
                          src={image}
                          alt={`Property Image ${index + 1}`}
                          className="w-full h-32 object-cover mb-2"
                        />
                      </div>
                    ))}
                  </Slider>
                </>
              )}
            </div>
          </div>

          {selectedImage && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
              <div className="relative">
                <button
                  className="absolute top-2 right-20 bg-white text-gray-800 px-2 py-1 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  className="absolute top-2 left-2 bg-white text-gray-800 px-2 py-1 rounded"
                  onClick={prevImage}
                >
                  Prev
                </button>
                <button
                  className="absolute top-2 right-2 bg-white text-gray-800 px-2 py-1 rounded"
                  onClick={nextImage}
                >
                  Next
                </button>
                <img src={selectedImage} alt="Selected Property Image" className="max-w-full max-h-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
