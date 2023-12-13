import  { useState, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutUs: React.FC = () => {
  const [initialInView, setInitialInView] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Callback to set initialInView to true when entering the viewport
  const onEnterViewport = useCallback(() => {
    setInitialInView(true);
  }, []);

  useEffect(() => {
    // Attach the callback to the onEnter event
    if (inView) {
      onEnterViewport();
    }
  }, [inView, onEnterViewport]);

  return (
    <section className="py-16">
      <div className="container mx-auto relative">
        <div
          ref={ref}
          className={`text-center transform transition-transform ${
            initialInView
              ? inView
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
              : 'opacity-0 translate-x-full'
          } duration-500`}
        >
          <h2 className="text-5xl font-bold mb-4 text-yellow-400">Who Are We?</h2>
          <p className="text-lg mb-8 leading-relaxed">
          Cooper & Blake embodies sophistication in real estate, specializing in innovative solutions and client-centric value creation. Our expert team navigates the dynamic housing sector with cutting-edge competencies. Committed to excellence, we redefine your real estate experience with sublime insight and refined expertise. Welcome to a realm where professional distinction meets the art of transformation.
          </p>
        </div>

        <div
          className={`text-center mt-6 transform transition-transform ${
            initialInView
              ? inView
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
              : 'opacity-0 translate-x-full'
          } duration-500`}
        >
          <a href="/About" className="text-yellow-500 hover:text-yellow-600 font-semibold text-lg hover:underline">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
