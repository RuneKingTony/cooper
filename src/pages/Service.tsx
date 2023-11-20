// src/App.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBookOpen,
  faPenToSquare,
  faBuildingUser,
  faHouseCircleCheck,
  faTrowelBricks,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

const Service: React.FC = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  const [ref5, inView5] = useInView({
    triggerOnce: true,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: true,
  });
  const [ref7, inView7] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-gradient-to-b from-gray-800 to-white-500 min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderCard(ref1, inView1, "Property Investment & Acquisition", "The exclusive hallmark of our practice lies in our ability to recognize sustainable value enhancers for our clientele. Most property investors seek investments and acquisitions with intrinsic value and maximum Return on Investment (ROI). This we achieve by presenting our clientele with thoroughly researched potentials that would best serve their objectives while adopting the most effective methods in terms of time and cost. Our clients continue to enjoy our value-centric relationship, even after their desired goals have been actualized.", faHouseCircleCheck, "fade-left")}
          {renderCard(ref2, inView2, "Property Sales and Leases", "Our capacity in this arena is a beautiful blend of art, applied science, information technology, and market intelligence. We are abreast with the laws governing each territory, strategies, for execution and concluding every transaction with a true sense of accomplishment. We have a track record of concluded transactions with our prestigious clientele, ranging from stand-alone homes to condominiums and estates. Ours is an unmatched expertise in understanding the dynamics of local markets while representing homeowners, estate surveyors, investors.", faChartLine, "fade-right")}
          {renderCard(ref3, inView3, "Portfolio Management", "We constantly study data from the real estate market analytics to determine the best methods to adopt towards increasing the value of our clients’ assets, thereby maximizing returns on investment. As the aspirations of our clients become greater as their investments mature further, we bear the added responsibility of maximizing the value of these investments. With diligent monitoring and evaluation of prevailing investment trends, we ensure that our clients’ portfolio yield projected returns as at when due.", faBuildingUser, "fade-left")}
       
          {renderCard(ref5, inView5, "Bespoke Development", "We create tailor-made solutions that satisfy client expectations that are different from the norm. Our flexibility and wide range of expertise give ample room for investors to speak freely about their goals or plans regarding their assets. Our relationships with them evolve, they let us in on their aspirations, and by evidential display of our competencies they believe in our capacity to execute on creating a world that had only existed in their dreams.", faTrowelBricks, "fade-left")}
          {renderCard(ref6, inView6, "Trusts and Wills", "The matter of estate planning is undoubtedly complex as family relationships and dynamics vary and can dramatically change and become litigious where money is concerned. Stephen Fletcher, Deputy Chief Executive of private bank Arbuthnot Latham, says, “We make the entire process of transferring assets, property, and investments seamless and void of the unpleasantness that tends to plague the subject, in our world today.", faPenToSquare, "fade-right")}
          {renderCard(ref7, inView7, "Research and Advisory", "Cooper & Blake studies the real estate market dynamics, gathers and interprets current market data, and peruses investment and acquisitions options and offerings, through both traditional and advanced data gathering and interpretation techniques. We provide useful information, presenting authentic and guided leads from which quality decisions can be made with corresponding action taken. We pride in the fact that there is no extent we would not go in order to ratify procedures to ascertain compliance with relevant authorities. By insisting on best practices and upholding our relationships with clients above all else, we evolve into trusted advisors, listening to their aspirations, fathoming the depths of their yearnings, and professionally inspiring them towards the realization of their dreams while minimizing risks.", faBookOpen, "fade-left")}
        </div>
      </div>
    </div>
  );
};

const renderCard = (
  ref: React.RefObject<HTMLDivElement>,
  inView: boolean,
  title: string,
  description: string,
  icon: any,
  animation: string
) => {
  const animationClass = inView ? `animate-${animation}` : "opacity-0";
  
  return (
    <div
      className={`mb-6 ${animationClass} p-6 border rounded-md bg-white text-black`}
      ref={ref}
    >
      <FontAwesomeIcon icon={icon} className="text-4xl mb-4 text-yellow-500 " />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Service;
