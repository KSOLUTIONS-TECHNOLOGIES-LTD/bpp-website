'use client';

import React from 'react';

const DashedLine = () => {
  return (
    <div className="w-full bg-[#374d4f] py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="w-10 h-1 bg-gray-300 rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default DashedLine;
