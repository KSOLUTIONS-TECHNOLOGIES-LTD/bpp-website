'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Aboutnews: FC = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white pt-28 md:pt-30 overflow-hidden">
      {/* Background image with zoom-in animation */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/images/news4.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bg-black/50 inset-0 bg-opacity-60" />
      </motion.div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 px-4 max-w-4xl plus"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.p
          className="text-[11.7px] leading-[100%] text-green-400 font-[600] mb-3 md:mb-6 tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          News Section
        </motion.p>

        <motion.h1
          className="text-4xl md:text-[54px] font-[700] mb-2 md:mb-6 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          Access Focus Information
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Aboutnews;
