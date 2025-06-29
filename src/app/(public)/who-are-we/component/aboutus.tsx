'use client';

import { FC } from 'react';

const WhoWeAre: FC = () => {
  return (
    <section className="relative w-full h-[93vh] flex items-center justify-center text-center text-white pt-28 md:pt-30">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/BG.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-60" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-2xl plus">
        <p className="text-[11.7px] leading-[100%] text-green-400 font-[400] mb-3 tracking-wide uppercase">
          We Create Value for Money
        </p>
        <h1 className="text-4xl md:text-[54px] font-[700] mb-2 md:mb-6 uppercase">
          Who Are We?
        </h1>
        <p className="text-[16px] font-[400] leading-[26.1px] text-[#FFFFFF]">
          The Public Procurement Act 2007 established the Bureau of Public
          Procurement as the regulatory authority responsible for the
          monitoring and oversight of public procurement, harmonizing the
          existing government policies and practices by regulating, setting
          standards and developing the legal framework and professional
          capacity for public procurement in Nigeria.
        </p>

        {/* Scroll down icon */}
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

export default WhoWeAre;
