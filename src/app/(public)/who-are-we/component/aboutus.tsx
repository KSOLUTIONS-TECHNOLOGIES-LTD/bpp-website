'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const WhoWeAre: FC = () => {
  return (
    <section className="relative w-full h-[93vh] flex items-center justify-center text-center text-white pt-28 md:pt-30 overflow-hidden">
      
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      >
        <img
          src="/assets/images/BG.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      
      <div className="relative z-10 px-4 max-w-2xl plus">
        <motion.p
          className="text-[11.7px] leading-[100%] text-green-400 font-[400] mb-3 tracking-wide uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          viewport={{ once: true }}
        >
          We Create Value for Money
        </motion.p>

        <motion.h1
          className="text-4xl md:text-[54px] font-[700] mb-2 md:mb-6 uppercase"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Who Are We?
        </motion.h1>

        <motion.p
          className="text-[16px] font-[400] leading-[26.1px] text-[#FFFFFF]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
        >
          The Public Procurement Act 2007 established the Bureau of Public
          Procurement as the regulatory authority responsible for the
          monitoring and oversight of public procurement, harmonizing the
          existing government policies and practices by regulating, setting
          standards and developing the legal framework and professional
          capacity for public procurement in Nigeria.
        </motion.p>

        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-10 h-10 mx-auto rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
