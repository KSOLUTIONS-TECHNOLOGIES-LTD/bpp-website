'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const AboutContract: FC = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center text-white pt-28 md:pt-30 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/contractor.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bg-black/50 inset-0 bg-opacity-60" />
      </div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 px-4 max-w-2xl plus"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[11.7px] leading-[100%] text-green-400 font-[700] mb-3 md:mb-6 tracking-wide uppercase"
        >
          Applications
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[54px] font-[700] mb-2 md:mb-6"
        >
          CCSP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[16px] font-[400] leading-[26.1px] text-[#FFFFFF]"
        >
          Contractor Registration System: A National Database for the Categorization and Classification of Federal Contractors and Service Providers across the nation
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutContract;
