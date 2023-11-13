// src/components/Home.tsx

import HeroSection from './HeroSection'
import AboutUs from './AboutUs';
import Project from './Projects';
import Services from './Services';


const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs/>
      <Services/>
      <Project/>
     
    </div>
  );
};

export default Home;
