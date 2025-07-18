'use client';

import React from 'react';
import { motion } from 'framer-motion';

type TrainingCard = {
  date: string;
  month: string;
  title: string;
  description: string;
};

const trainings: TrainingCard[] = [
  {
    date: '24',
    month: 'June',
    title: 'FUTO 2019 TRAINING',
    description:
      'We are creating transparent, dynamic and world-class procurement workforce across the nation',
  },
  {
    date: '24',
    month: 'June',
    title: 'FUTO 2019 TRAINING',
    description:
      'We are creating transparent, dynamic and world-class procurement workforce across the nation',
  },
  {
    date: '24',
    month: 'June',
    title: 'FUTO 2019 TRAINING',
    description:
      'We are creating transparent, dynamic and world-class procurement workforce across the nation',
  },
  {
    date: '24',
    month: 'June',
    title: 'FUTO 2019 TRAINING',
    description:
      'We are creating transparent, dynamic and world-class procurement workforce across the nation',
  },
];

const UpcomingTrainings = () => {
  return (
    <section className="py-10 md:py-28 px-4 w-full mx-auto bg-white px-6 md:px-24 plus 2xl:max-w-7xl 2xl:mx-auto overflow-hidden">
      {/* Animated Heading */}
      <motion.h2
        className="text-center text-2xl md:text-[45px] font-semibold mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Upcoming Trainings
      </motion.h2>

      {/* Animated Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {trainings.map((training, index) => (
          <motion.div
            key={index}
            className="flex bg-gray-100 shadow-md overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#009C3E] text-white flex flex-col items-center justify-center w-20 min-w-[8rem] py-6 px-10">
              <span className="text-[50px] font-bold">{training.date}</span>
              <span className="text-[30px]">{training.month}</span>
            </div>
            <div className="flex-1 p-4 bg-[#EDEDED]">
              <h3 className="font-bold text-[20px] mb-2 pt-6">{training.title}</h3>
              <p className="text-gray-600 text-[15px]">{training.description}</p>
              <span className="text-green-600 text-[12px] font-medium mt-3 inline-block hover:underline cursor-pointer transition-all duration-200">
                Read More
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingTrainings;
