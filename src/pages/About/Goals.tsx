// src/components/GoalsObjectives.tsx

import { useInView } from 'react-intersection-observer';
import goals from '../../assets/images/goalss.jpeg';

const GoalsObjectives: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 to-white text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-yellow-500">Goals and Objectives</h2>

        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center ${inView ? 'animate-fadeIn' : ''}`}
        >
          {/* Left side */}
          <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
            <ul className="list-disc pl-4 text-lg">
              <li className="mb-4">
                Articulate and serve clientele objectives, working closely with them to realize their plans.
              </li>
              <li className="mb-4">
                Introduce and lead the changes required in our territory, constantly creating value at the professional and enterprise level.
              </li>
              <li className="mb-4">
                Evolve a team and a system that is fully abreast with the broad spectrum of Real Estate market and activities.
              </li>
            </ul>
          </div>

          {/* Right side */}
          <div className="md:w-1/2">
            {/* Add an image for goals and objectives */}
            <img src={goals} alt="Goals Image" className="w-full h-auto rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsObjectives;
