
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faSearch, faChartPie, faHome, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faBuilding, faSearch, faChartPie, faHome, faBriefcase, faTools);

interface ServiceProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ icon, title, description }) => (
  <div className="p-4 bg-white shadow-md rounded-md text-center transition-transform hover:shadow-lg">
    <FontAwesomeIcon icon={icon} className="text-4xl mb-4 text-yellow-400" />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const services = [
  { icon: faBuilding, title: 'Property Investment & Acquisition', description: 'Investing in and acquiring properties for optimal returns.' },
  { icon: faSearch, title: 'Research & Advisory', description: 'Providing research and advisory services for informed decision-making.' },
  { icon: faChartPie, title: 'Portfolio Management', description: 'Managing and optimizing real estate portfolios.' },
  { icon: faHome, title: 'Property Sales & Leases', description: 'Facilitating the sale and lease of residential and commercial properties.' },
  { icon: faBriefcase, title: 'Trusts & Wills', description: 'Assisting in the establishment of trusts and wills for property planning.' },
  { icon: faTools, title: 'Bespoke Development', description: 'Customized development projects tailored to meet specific needs.' },
];

const Services: React.FC = () => (
  <section className="bg-gray-100 p-8 transition-background-color duration-500">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Real Estate Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
         <a href='Service'> Learn More</a>
        </button>
      </div>
    </div>
  </section>
);

export default Services;
