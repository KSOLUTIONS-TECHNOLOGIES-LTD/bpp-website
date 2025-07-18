'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const ContractorSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-14 overflow-hidden">
      
      
      <div className="grid grid-cols-2 gap-4 max-w-md xl:max-w-7xl">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="/assets/images/trainingimg.png"
              alt="Consult 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="/assets/images/contractimg2.png"
              alt="Consult 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="/assets/images/contractimg1.png"
              alt="Consult 3"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="/assets/images/contractimg3.png"
              alt="Consult 4"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-md text-center md:text-left plus"
      >
        <h2 className="text-3xl md:text-[35px] font-[600] text-[#161C2D] mb-4">
          Contractor Consultant
          <br />
          Service Provider
        </h2>
        <p className="text-[#161C2D] mb-4 text-[16px] font-[400] leading-[26.1px]">
          Contractor Registration System: A National Database for the Categorization and Classification of Federal Contractors and Service Providers across the nation.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#108A00] hover:bg-green-700 text-white px-6 py-3 rounded-sm transition font-medium flex gap-2 items-center"
        >
          VIEW SYSTEM
          <NorthEastIcon fontSize="small" className="text-sm" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ContractorSection;
