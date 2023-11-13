// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Property from './pages/ProjectListing/Listing';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/About" element={<About/>} />
        <Route path="/Listing" element={<Property/>}/>
      </Routes>
       <Footer/>
    </Router>
  );
};

export default App;
