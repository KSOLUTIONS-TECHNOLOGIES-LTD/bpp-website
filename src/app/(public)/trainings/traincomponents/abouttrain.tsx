'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Abouttrain: FC = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center text-white pt-28 md:pt-30 overflow-hidden">
      {/* Background Image with Fade Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <img
          src="/assets/images/training.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bg-black/50 inset-0 bg-opacity-60" />
      </motion.div>

      {/* Text Content with Animations */}
      <motion.div
        className="relative z-10 px-4 max-w-2xl plus"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25
            }
          }
        }}
      >
        <motion.p
          className="text-[11.7px] leading-[100%] text-green-400 font-[700] mb-3 md:mb-6 tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          capacity building
        </motion.p>

        <motion.h1
          className="text-4xl md:text-[54px] font-[700] mb-2 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TRAININGS
        </motion.h1>

        <motion.p
          className="text-[16px] font-[400] leading-[26.1px] text-[#FFFFFF]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We strive to attain excellence through capacity building in procurement
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Abouttrain;
