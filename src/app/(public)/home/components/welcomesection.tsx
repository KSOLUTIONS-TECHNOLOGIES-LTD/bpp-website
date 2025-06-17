'use client';

// import Image from 'next/image';
import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16 plus">
      <div className=" flex flex-col md:flex-row justify-center gap-2">
        {/* Left Section */}
        <div className='w-full md:w-3/5'>
          <h2  className="text-[35px] md:text-[50px] font-[600] mb-4">Welcome to BPP</h2>
          <p  className="text-gray-700 mb-6 text-[16.2px] font-[400] leading-[27px]">
            The Public Procurement Act 2007 established the Bureau of Public Procurement as the regulatory authority responsible for the monitoring and oversight of public procurement. It aims to modernize procurement practices, ensure transparency, and promote accountability in Nigeria.
          </p>

          <div className="mb-6">
            <h3  className="text-[#009C3E] font-semibold mb-1 text-[22px] font-[700]">Our Mission</h3>
            <p  className="text-gray-700 text-[16.2px] font-[400] leading-[27px]">
              To professionalize the process of procurement that ensures Transparency, Efficiency, Competition, Integrity and Value for Money to support National Growth and Development.
            </p>
          </div>

          <div className="mb-6">
            <h3  className="text-[#009C3E] font-semibold mb-1 text-[22px] font-[700]">Our Vision</h3>
            <p  className="text-gray-700 text-[16.2px] font-[400] leading-[27px]">
              Building and sustaining an efficient country’s procurement system that meets international best practices.
            </p>
          </div>

          <button className="mt-4 bg-[#108A00] hover:bg-green-700 text-white px-6 py-2 rounded shadow transition text-[11px] font-[600]">
            ACCESS BDC E-COMMERCE
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end w-full md:w-3/5">
          <div >
            <img
              src="/public/assets/images/welcomeimg.png" 
              alt="Dr. Adebowale A. Adedokun"
              width={300}
              height={400}
              className="mx-auto mb-4 w-[400px]"
            />
            {/* <p style={{ fontFamily: 'var(--font-jakarta)' }} className="text-yellow-600 font-bold text-sm">
              Dr. Adebowale A. Adedokun
            </p>
            <p style={{ fontFamily: 'var(--font-jakarta)' }} className="text-gray-800 font-medium text-sm">
              Director-General
            </p>
            <p style={{ fontFamily: 'var(--font-jakarta)' }} className="text-gray-600 text-sm">
              Bureau of Public Procurement (BPP)
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
