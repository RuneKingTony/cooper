// src/components/ProjectPage.tsx

import  { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import lakeImage from '../assets/images/lake.jpeg';
import Img2 from '../assets/images/citi.jpeg';
import Img3 from '../assets/images/light.jpeg';
import Img4 from '../assets/images/trace.jpeg';
import Img5 from '../assets/images/mews.jpeg';
import Img6 from '../assets/images/height.jpeg';

const projects = [
  { id: 1, title: 'Project 1', image: lakeImage, description: 'Description 1' },
  { id: 2, title: 'Project 2', image: Img2, description: 'Description 2' },
  { id: 3, title: 'Project 3', image: Img3, description: 'Description 3' },
  { id: 4, title: 'Project 4', image: Img4, description: 'Description 4' },
  { id: 5, title: 'Project 5', image: Img5, description: 'Description 4' },
  { id: 6, title: 'Project 6', image: Img6, description: 'Description 4' },
];

const ProjectPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Project Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* View All Segment */}
        <div className="bg-gradient-to-r from-gray-700 to-white-500 py-16 p-4 rounded-md md:col-span-1 flex flex-col items-center justify-center h-full w-full">
          <div className="mb-4 text-white">Our Projects</div>
          <button className="bg-white text-blue-400 px-4 py-2 rounded-md">View All</button>
        </div>

        {/* Project Boxes */}
        <div
          ref={ref}
          className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
  index: number;
  inView: boolean;
}
const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, inView }) => {
  const animationRef = useRef<HTMLDivElement>(null);

  const animationStyle = {
    animation: inView ? `animate-zoom-in 1.5s ${index * 0.5}s both` : 'none',
  };

  return (
    <div
      ref={animationRef}
      className="relative overflow-hidden group h-30vh"
      style={animationStyle}
    >
      <style>
        {`
          @keyframes animate-zoom-in {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 rgba(0, 0, 0, 0.6);
            }
            100% {
              transform: scale(1.1);
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
            }
          }
        `}
      </style>
      <div className="transition-transform group-hover:scale-110 image-container">
        <div className="h-full w-full flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-125"
            style={{ padding: 0 }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-lg font-bold mb-2">{project.title}</h2>
          <p className="text-gray-300">{project.description}</p>
        </div>
      </div>
    </div>
  );
};


export default ProjectPage;