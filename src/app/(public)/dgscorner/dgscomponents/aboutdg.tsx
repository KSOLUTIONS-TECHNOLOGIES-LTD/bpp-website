'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutDgSection = () => {
  return (
    <section className="pt-40 bg-white pb-16 px-4 md:px-24 plus">
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-7xl 2xl:mx-auto">
        
        <motion.div
          className="w-full md:w-3/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[35px] md:text-[50px] font-[500] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            DG'S Corner
          </motion.h2>

          {[...Array(3)].map((_, i) => (
            <motion.p
              key={i}
              className="text-gray-700 mb-6 text-[16.2px] font-[400] leading-[27px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                "Dr. Adebowale Adedokun is the substantive Director-General of the Bureau of Public Procurement (BPP), appointed by President Bola Ahmed Tinubu on November 14, 2024. Before his appointment as Director-General, he served as the Director of Research, Training and Strategic Planning at the Bureau of Public Procurement.",
                "Dr. Adedokun holds the professional designation of Chartered Procurement and Supply Professional, making him the 913th fellow of the CIPS Global. He also holds additional professional certifications including FCIPS (Fellow of the Chartered Institute of Procurement and Supply) and ACFE (Association of Certified Fraud Examiners), as indicated by his professional title Dr. Adebowale A. Adedokun FCIPS, ACFE.",
                "As Director-General of the BPP, Dr. Adedokun has demonstrated strong commitment to transparency and accountability in Nigeria's procurement processes. He has been strengthening collaboration with anti-corruption agencies to enhance transparency and accountability in Nigeria's procurement processes.",
              ][i]}
            </motion.p>
          ))}
        </motion.div>

        
        <motion.div
          className="flex justify-center md:justify-end w-full md:w-3/5"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/assets/images/DG.png"
            alt="Dr. Adebowale A. Adedokun"
            width={300}
            height={400}
            className="mx-auto mb-4 w-[500px] rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDgSection;
