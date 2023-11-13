
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import vision from '../../assets/images/compass.jpeg';
import mission from '../../assets/images/mission.jpeg';

const fadeInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  underlineHidden: { width: 0 },
  underlineVisible: { width: '100%' },
};

const VisionMission: React.FC = () => {
  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        {/* Vision Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-12"
          ref={visionRef}
          initial="hidden"
          animate={visionInView ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 2.5 }}
        >
          <div className="md:w-1/2 md:mr-8">
            <img src={vision} alt="Vision Image" className="w-full h-auto rounded-md" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 pl-5">Through the eyes of Cooper & Blake…</h1>
            <p className="text-lg md:text-xl md:pr-8 lg:pr-16 pl-5">
              Our vision is to realize a sustainable and profitable service firm that produces leadership, rewards loyalty, and is responsive to the community.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center"
          ref={missionRef}
          initial="hidden"
          animate={missionInView ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 1.5 }}
        >
          <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8 pl-5">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <motion.span
                className="border-b border-blue-500"
                initial="underlineHidden"
                animate={missionInView ? 'underlineVisible' : 'underlineHidden'}
                variants={fadeInVariants}
                transition={{ duration: 1 }}
              >
                We’ve got it covered...
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl md:pr-8 lg:pr-16 pl-5">
              Our Mission is to provide holistic housing solutions that hold value for our clients.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={mission} alt="Mission Image" className="w-full h-auto rounded-md" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
