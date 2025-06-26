'use client';

import { FC } from 'react';

const Abouttrain: FC = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center text-white pt-28 md:pt-30">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/public/assets/images/trainingimg2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bg-blue-900/40 inset-0 bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-2xl plus">
        <p className="text-[11.7px] leading-[100%] text-green-400 font-[700] mb-3 md:mb-6 tracking-wide uppercase">
          capacity building
        </p>
        <h1 className="text-4xl md:text-[54px] font-[700] mb-2 md:mb-6">
          TRAININGS
        </h1>
        <p className="text-[16px] font-[400] leading-[26.1px] text-[#FFFFFF]">
          We strive to attain excellence through capacity building in procurement
        </p>

        {/* icon */}
        
      </div>
    </section>
  );
};

export default Abouttrain;
