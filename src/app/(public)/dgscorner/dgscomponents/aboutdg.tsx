'use client';

// import Image from 'next/image';
import React from 'react';

const AboutDgSection = () => {
  return (
    <section className="pt-40 bg-white pb-16 px-4 md:px-24 plus">
      <div className=" flex flex-col md:flex-row justify-center gap-2 max-w-7xl 2xl:mx-auto">
        {/* Left Section */}
        <div className='w-full md:w-3/5'>
          <h2  className="text-[35px] md:text-[50px] font-[500] mb-4">DG'S Corner</h2>
          <p  className="text-gray-700 mb-6 text-[16.2px] font-[400] leading-[27px]">
            Dr. Adebowale Adedokun is the substantive Director-General of the Bureau of Public Procurement (BPP), appointed by President Bola Ahmed Tinubu on November 14, 2024. Before his appointment as Director-General, he served as the Director of Research, Training and Strategic Planning at the Bureau of Public Procurement.



          </p>

          <p className="text-gray-700 mb-6 text-[16.2px] font-[400] leading-[27px]">
            Dr. Adedokun holds the professional designation of Chartered Procurement and Supply Professional, making him the 913th fellow of the CIPS Global. He also holds additional professional certifications including FCIPS (Fellow of the Chartered Institute of Procurement and Supply) and ACFE (Association of Certified Fraud Examiners), as indicated by his professional title Dr. Adebowale A. Adedokun FCIPS, ACFE.
          </p>

          <p className="text-gray-700 mb-6 text-[16.2px] font-[400] leading-[27px]">
            As Director-General of the BPP, Dr. Adedokun has demonstrated strong commitment to transparency and accountability in Nigeria's procurement processes. He has been strengthening collaboration with anti-corruption agencies to enhance transparency and accountability in Nigeria's procurement processes.
          </p>

          

          
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end w-full md:w-3/5">
          <div >
            <img
              src="/assets/images/DG.png" 
              alt="Dr. Adebowale A. Adedokun"
              width={300}
              height={400}
              className="mx-auto mb-4 w-[500px]"
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

export default AboutDgSection;
