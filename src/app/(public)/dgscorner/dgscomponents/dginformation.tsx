'use client';

import React from 'react';
import { motion } from 'framer-motion';

const newsItems = [
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'May 20, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'May 19, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'May 5, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'Jan 15, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'Jan 15, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'Jan 15, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'Jan 15, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'Jan 15, 2025',
  },
];

const LatestInformations = () => {
  return (
    <section className="bg-white text-black py-10 md:py-16 px-4 md:px-16 plus">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[24px] font-[700] tracking-widest text-[#444444]">
            LATEST INFORMATION FROM DG
          </h2>
          <a
            href="#"
            className="text-[#009C3E] text-[11.4px] font-[500]"
          >
            VIEW ALL
          </a>
        </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-md p-4 bg-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: 'spring',
              }}
              viewport={{ once: true }}
            >
              <p className="text-[16px] text-[#1C3F3A] mb-4 leading-[24px] font-[400]">
                {item.title}
              </p>
              <p className="text-[12px] text-[#647B78] font-[400]">
                {item.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInformations;
