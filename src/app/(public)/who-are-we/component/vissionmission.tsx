'use client';

import { FC } from 'react';

const VisionMission: FC = () => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-gray-100 gap-2 md:gap-20 plus 2xl:max-w-7xl 2xl:mx-auto">
      {/* Left Image */}
      <div className="w-full md:w-1/3 h-64 md:h-[600px] relative">
        <img
          src="/assets/images/missionimg.png" 
          alt="Vision and Mission Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:py-12 plus">
        <div className="max-w-xl mx-auto xl:max-w-7xl">
          <h2 className="text-[35px] md:text-[48px] font-[700] text-gray-900 mb-3 leading-[58px]">
            Our Vision
          </h2>
          <p className="text-[#161C2D] mb-12 leading-[32px] text-[19px] font-[400]">
            Building and sustaining an efficient country procurement system that meets international best practices
          </p>

          <h2 className="text-[35px] md:text-[48px] font-[700] text-gray-900 mb-3 leading-[58px]">
            Our Mission
          </h2>
          <p className="text-[#161C2D] mb-6 leading-[32px] text-[19px] font-[400]">
            To professionalise the process of procurement that ensures Transparency, Efficiency, Competition, Integrity and Value for Money to support National Growth and Development
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
