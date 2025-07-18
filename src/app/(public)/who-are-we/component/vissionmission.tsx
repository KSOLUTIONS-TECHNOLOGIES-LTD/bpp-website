'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const VisionMission: FC = () => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-gray-100 gap-2 md:gap-20 plus 2xl:max-w-7xl 2xl:mx-auto overflow-hidden">
      
      <motion.div
        className="w-full md:w-1/3 h-64 md:h-[600px] relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/images/missionimg.png"
          alt="Vision and Mission Background"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:py-12 plus">
        <div className="max-w-xl mx-auto xl:max-w-7xl">
          <motion.h2
            className="text-[35px] md:text-[48px] font-[700] text-gray-900 mb-3 leading-[58px]"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h2>

          <motion.p
            className="text-[#161C2D] mb-12 leading-[32px] text-[19px] font-[400]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Building and sustaining an efficient country procurement system that meets international best practices
          </motion.p>

          <motion.h2
            className="text-[35px] md:text-[48px] font-[700] text-gray-900 mb-3 leading-[58px]"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>

          <motion.p
            className="text-[#161C2D] mb-6 leading-[32px] text-[19px] font-[400]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            viewport={{ once: true }}
          >
            To professionalise the process of procurement that ensures Transparency, Efficiency, Competition, Integrity and Value for Money to support National Growth and Development
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
