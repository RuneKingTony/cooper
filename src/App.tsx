// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import PropertyListing from './pages/ProjectListing/PropertyListing';
import PropertyDetails from './pages/ProjectListing/PropertyDetails';
import ContactUs from './pages/ContactUs';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        {/* Route for the property listing page */}
        <Route path="Listing" element={<PropertyListing />} />
        <Route path="property/:id" element={<PropertyDetails />} />
        <Route path="ContactUs" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
