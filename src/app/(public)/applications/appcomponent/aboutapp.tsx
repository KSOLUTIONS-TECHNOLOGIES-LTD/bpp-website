'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Apps: FC = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center text-white pt-28 md:pt-30 overflow-hidden">
      
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src="/assets/images/appimg2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>


      <motion.div
        className="relative z-10 px-4 max-w-2xl plus"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        
        <motion.p
          className="text-[11.7px] leading-[100%] text-green-400 font-[400] mb-3 md:mb-6 tracking-wide uppercase"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Register with ease on our enhanced applications
        </motion.p>

        
        <motion.h1
          className="text-4xl md:text-[54px] font-[700] mb-2 md:mb-6"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          BPP APPLICATIONS
        </motion.h1>

        
        <motion.p
          className="text-[16px] font-[400] leading-[26.1px] text-[#FFFFFF] max-w-md mx-auto text-start"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          BPP has a variety of applications which have transformed the registration process for most of her procurement procedures.
        </motion.p>

        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
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
      </motion.div>
    </section>
  );
};

export default Apps;
