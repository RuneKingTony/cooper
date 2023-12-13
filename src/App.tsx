// src/App.tsx
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import PropertyListing from "./pages/ProjectListing/PropertyListing";
import PropertyDetails from "./pages/ProjectListing/PropertyDetails";
import ContactUs from "./pages/ContactUs";
import Service from "./pages/Service";
import KommunicateChat from "./KommunicateChat";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Listing" element={<PropertyListing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <KommunicateChat />
      <Footer />
    </Router>
  );
};

export default App;
