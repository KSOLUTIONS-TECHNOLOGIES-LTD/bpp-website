'use client';

import { useRef } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const cardData = [
  {
    title: 'Do you Know',
    highlight: 'Petition Submissions',
    subtitle: 'are currently online?',
    linkText: 'Submit Now',
    bgColor: 'bg-emerald-900',
  },
  {
    title: 'Are you a',
    highlight: 'Federal Government ?',
    subtitle: 'Contractor, Consultant or service provider',
    linkText: 'Register with Ease',
    bgColor: 'bg-red-900',
  },
  {
    title: 'Report any',
    highlight: 'suspicious procurement activity',
    subtitle: 'and get full backings of the bureau',
    linkText: 'Report here',
    bgColor: 'bg-teal-900',
  },
  {
    title: 'Are you a',
    highlight: 'Procurement Officer?',
    subtitle: 'Update your profile now',
    linkText: 'Update your profile now',
    bgColor: 'bg-red-900',
  },
];

export default function ScrollableCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full pt-10 pb-16 px-4 flex items-center gap-4 relative bg-white">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 z-10"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar md:w-full"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} text-white rounded-xl w-[90%] sm:w-[300px] md:w-[30%] shrink-0 p-6 flex flex-col justify-between shadow-lg`}
          >
            <div>
              <h3 className="text-[16px] font-semibold md:text-[24px] leading-[120%] md:leading-[100%]">{card.title}</h3>
              <p
                className={`text-[16px] font-bold md:text-[24px] leading-[100%] ${
                  index === 1 ? 'text-yellow-300' : 'text-green-400'
                }`}
              >
                {card.highlight}
              </p>
              <p className="text-[16px] md:text-[24px] leading-[100%]">{card.subtitle}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-[16px] font-[400] underline">{card.linkText}</p>
              <div className="bg-white rounded-full p-1 text-black">
                <NorthEastIcon fontSize="small" />
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <button
        onClick={() => scroll('right')}
        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 z-10"
      >
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>
  );
}
