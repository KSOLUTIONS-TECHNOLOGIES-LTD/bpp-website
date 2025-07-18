'use client';

import { motion } from 'framer-motion';

const BPPTrainingSection = () => {
  return (
    <section className="bg-[#f8fbff] py-16 px-4 md:px-20 overflow-hidden">
      <div className="max-w-5xl flex flex-col md:flex-row justify-center items-center mx-auto gap-10">
       
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/trainingimg.png"
            alt="BPP Training"
            className="rounded-lg object-cover h-fit shadow-xl"
          />
        </motion.div>

        
        <motion.div
          className="w-full md:w-1/2 plus"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.h2
            className="text-2xl md:text-[45px] font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            BPP Trainings
          </motion.h2>

          <motion.p
            className="text-gray-700 leading-relaxed mb-4 text-[16px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            To provide skilled workforce and professionals for public procurement
            management through training, research, and development.
          </motion.p>

          <motion.p
            className="text-gray-700 leading-relaxed text-[16px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            We are creating a transparent, dynamic and world-class procurement
            workforce across the nation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BPPTrainingSection;
