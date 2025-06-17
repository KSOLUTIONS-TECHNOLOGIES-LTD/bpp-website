'use client';

import React from 'react';

const newsItems = [
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'May 20, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'May 19, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'May 5, 2025',
  },
  {
    title:
      'Approval for the Revision of Subsisting Service-wide Prior Review and Monetary Thresholds Implementation Guidelines.',
    date: 'Jan 15, 2025',
  },
];

const LatestInformation = () => {
  return (
    <section className="bg-white text-black py-10 md:py-16 px-4 md:px-16 plus">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-[700] tracking-widest text-[#444444]">
            LATEST INFORMATION
          </h2>
          <a
            href="#"
            className="text-[#009C3E] text-[11.4px] font-[500]"
          >
            VIEW ALL
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-md p-4 transition"
            >
              <p className="text-[16px] text-[#1C3F3A] mb-4 leading-[24px] font-[400]">
                {item.title}
              </p>
              <p className="text-[12px] text-[#647B78] font-[400]">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInformation;
