'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NorthEastIcon from '@mui/icons-material/NorthEast';
// import Link from 'next/link';

const WelcomeSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-24 plus">
      <div className="flex flex-col md:flex-row justify-center gap-2 max-w-7xl 2xl:mx-auto">
        
        <div className="w-full md:w-3/5 space-y-6">
          <motion.h2
            className="text-[35px] md:text-[50px] font-[600]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Welcome to BPP
          </motion.h2>

          <motion.p
            className="text-gray-700 text-[16.2px] font-[400] leading-[27px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            The Public Procurement Act 2007 established the Bureau of Public Procurement as the
            regulatory authority responsible for the monitoring and oversight of public procurement.
            It aims to modernize procurement practices, ensure transparency, and promote
            accountability in Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-[#009C3E] font-semibold mb-1 text-[22px] font-[700]">Our Mission</h3>
            <p className="text-gray-700 text-[16.2px] font-[400] leading-[27px]">
              To professionalize the process of procurement that ensures Transparency, Efficiency,
              Competition, Integrity and Value for Money to support National Growth and Development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-[#009C3E] font-semibold mb-1 text-[22px] font-[700]">Our Vision</h3>
            <p className="text-gray-700 text-[16.2px] font-[400] leading-[27px]">
              Building and sustaining an efficient country’s procurement system that meets
              international best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* <Link href="/dgscorner" className="no-underline"> */}
              <button className="mt-4 bg-[#108A00] hover:bg-green-700 text-white px-8 py-4 rounded shadow transition text-[11px] font-[600] plus flex flex-row gap-2">
                ACCESS DG'S CORNER
                <NorthEastIcon fontSize="small" className="text-sm" />
              </button>
            {/* </Link> */}
          </motion.div>
        </div>

        
        <motion.div
          className="flex justify-center md:justify-end w-full md:w-3/5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/assets/images/DG.png"
            alt="Dr. Adebowale A. Adedokun"
            width={300}
            height={400}
            className="mx-auto mb-4 w-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
