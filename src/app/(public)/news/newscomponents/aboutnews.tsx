'use client';

import { FC } from 'react';

const Aboutnews: FC = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white pt-28 md:pt-30">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/news4.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bg-black/50 inset-0 bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl plus">
        <p className="text-[11.7px] leading-[100%] text-green-400 font-[600] mb-3 md:mb-6 tracking-wide uppercase">
          News Section
        </p>
        <h1 className="text-4xl md:text-[54px] font-[700] mb-2 md:mb-6 uppercase">
          Access Focus Information
        </h1>
        {/* <p className="text-[16px] font-[400] leading-[26.1px] text-[#FFFFFF]">
          Access Focus Information
        </p> */}

        {/* icon */}
        
      </div>
    </section>
  );
};

export default Aboutnews;
