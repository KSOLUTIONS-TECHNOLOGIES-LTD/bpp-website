'use client';

// import Image from 'next/image';
import React from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const ContractorSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-14">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-md">
        
        <div className='flex flex-col gap-6'>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/assets/images/trainingimg.png"
            alt="Consult 1"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/assets/images/contractimg2.png"
            alt="Consult 2"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        </div>

        <div className='flex flex-col gap-6 mt-8'>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/assets/images/contractimg1.png"
            alt="Consult 3"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/assets/images/contractimg3.png"
            alt="Consult 4"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-md text-center md:text-left plus">
        <h2 className="text-3xl md:text-[35px] font-[600] text-[#161C2D] mb-4">
          Contractor Consultant<br />Service Provider
        </h2>
        <p className="text-[#161C2D] mb-4 text-[16px] font-[400] leading-[26.1px]">
          Contractor Registration System: A National Database for the Categorization and Classification of Federal Contractors and Service Providers across the nation.
        </p>
        <button className="bg-[#108A00] hover:bg-green-700 text-white px-6 py-3 rounded-sm transition font-medium flex gap-2 items-center">
          VIEW SYSYTEM 
          <NorthEastIcon fontSize="small" className='text-sm'/>
        </button>
      </div>
    </section>
  );
};

export default ContractorSection;
