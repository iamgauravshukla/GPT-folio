import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import IntroSection from './IntroSection';
import GLBModelViewer from '../Models/GLBModelViewer';
import introModel from '../../assets/models/intro.glb';

const ScrollAnimation = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  React.useEffect(() => {
    if (inView1) {
      controls1.start('visible');
      controls2.start('hidden');
      controls3.start('hidden');
    }
  }, [controls1, controls2, controls3, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls1.start('hidden');
      controls2.start('visible');
      controls3.start('hidden');
    }
  }, [controls1, controls2, controls3, inView2]);

  React.useEffect(() => {
    if (inView3) {
      controls1.start('hidden');
      controls2.start('hidden');
      controls3.start('visible');
    }
  }, [controls1, controls2, controls3, inView3]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <motion.section
        ref={ref1}
        initial="visible"
        animate={controls1}
        variants={variants}
        className="h-screen flex items-center justify-center bg-gray-400 text-white"
      >
        <div className="flex">
          <div className="flex-1 w-1/2">
            <IntroSection />
          </div>
          <div className="flex-2">
            <GLBModelViewer modelUrl={introModel} />
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={variants}
        className="h-screen flex items-center justify-center bg-blue-500 text-white"
      >
        <IntroSection />
      </motion.section>
      <motion.section
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={variants}
        className="h-screen flex items-center justify-center bg-green-500 text-white"
      >
        Section-3
      </motion.section>
    </div>
  );
};

export default ScrollAnimation;
