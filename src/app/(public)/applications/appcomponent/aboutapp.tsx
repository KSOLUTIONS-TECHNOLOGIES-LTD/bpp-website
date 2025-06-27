'use client';

import { FC } from 'react';

const Apps: FC = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center text-white pt-28 md:pt-30">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/public/assets/images/appimg2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute bg-blue-700/50 inset-0 bg-opacity-60" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-2xl plus">
        <p className="text-[11.7px] leading-[100%] text-green-400 font-[400] mb-3 md:mb-6 tracking-wide uppercase">
          Register with ease on our enhanced applications
        </p>
        <h1 className="text-4xl md:text-[54px] font-[700] mb-2 md:mb-6">
          BPP APPLICATIONS
        </h1>
        <p className="text-[16px] font-[400] leading-[26.1px] text-[#FFFFFF] max-w-md mx-auto text-start">
          BPP has a variety of applications which have transformed the registration process for most of her procurement procedures.
        </p>

        {/* icon */}
        <div className="mt-12">
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
        </div>
      </div>
    </section>
  );
};

export default Apps;
