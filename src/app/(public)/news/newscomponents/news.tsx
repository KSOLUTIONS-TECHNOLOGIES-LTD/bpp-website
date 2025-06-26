'use client';

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NorthEastIcon from '@mui/icons-material/NorthEast';

interface Article {
  id: string;
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  date: string;
}

const topNews: Article[] = [
  {
    id: 'tn1',
    imageSrc: '/public/assets/images/newsimg1.png',
    category: 'National Accord',
    title: 'Hold us responsible if FG fails to deliver roads, other projects due to procurement lapses',
    description: 'May 12, 2025',
    date: 'May 12, 2025',
  },
  {
    id: 'tn2',
    imageSrc: '/public/assets/images/newsimg3.png',
    category: 'PeoplesDaily',
    title: 'BPP, PCNGI partner on clean energy transition',
    description: 'May 08, 2025',
    date: 'May 08, 2025',
  },
  {
    id: 'tn3',
    imageSrc: '/public/assets/images/newsimg2.png',
    category: 'PromptNews',
    title: 'BPP: Adedokun Adebowale\'s silent revolution to reform procurement',
    description: 'May 07, 2025',
    date: 'May 07, 2025',
  },
];

const moreBlogs: Article[] = [
  {
    id: 'mb1',
    imageSrc: '/public/assets/images/newsimg1.png',
    category: 'National Accord',
    title: 'Hold us responsible if FG fails to deliver roads, other projects due to procurement lapses',
    description: 'May 12, 2025',
    date: 'May 12, 2025',
  },
  {
    id: 'mb2',
    imageSrc: '/public/assets/images/newsimg2.png',
    category: 'PeoplesDaily',
    title: 'BPP, PCNGI partner on clean energy transition',
    description: 'May 08, 2025',
    date: 'May 08, 2025',
  },
  {
    id: 'mb3',
    imageSrc: '/public/assets/images/newsimg3.png',
    category: 'PromptNews',
    title: 'BPP: Adedokun Adebowale\'s silent revolution to reform procurement',
    description: 'May 07, 2025',
    date: 'May 07, 2025',
  },
];

const NewsAndBlogsSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 plus">
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-6 lg:px-8">

        {/* Search */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
  <div className="flex w-full md:w-3/4 lg:w-2/3 space-x-2">
    <input
      type="text"
      placeholder="Search for Publications |"
      className="flex-grow px-3 py-4 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-800 bg-gray-100 text-black font-[500]"
    />
    <button className="bg-[#108A00] hover:bg-green-700 text-white py-3 px-4 rounded-sm flex items-center justify-center transition duration-200 ease-in-out gap-2">
      
      SEARCH
      <NorthEastIcon fontSize="small" className='text-sm'/>
    </button>
  </div>
  <button className="bg-white hover:bg-gray-100 text-gray-700 font-medium py-4 px-4 rounded-sm  border border-gray-200 flex items-center transition duration-200 ease-in-out w-full md:w-auto justify-center mb-2">
    <TuneIcon className="h-4 w-4 mr-2" />
    FILTER
  </button>
</div>

        {/* Top News */}
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-2">Top News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {topNews.map((article) => (
            <div key={article.id} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <img
                src={article.imageSrc}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/400x250/E0E0E0/808080?text=Image+Not+Found';
                }}
              />
              <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                  <p className="text-[14px] text-gray-500 mb-1">{article.category}</p>
                  <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-relaxed">
                    {article.title}
                  </h3>
                </div>
                <p className="text-[14px] text-gray-600 mt-2">{article.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More Blogs */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
          <h2 className="text-2xl font-semibold ">More Blogs</h2>
          <a href="#" className="text-green-700 hover:underline text-sm font-medium no-underline">VIEW ALL</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {moreBlogs.map((article) => (
            <div key={article.id} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <img
                src={article.imageSrc}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/400x250/E0E0E0/808080?text=Image+Not+Found';
                }}
              />
              <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{article.category}</p>
                  <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-relaxed">
                    {article.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mt-4">{article.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          <button className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition duration-200">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <button
              key={page}
              className={`w-9 h-9 flex items-center justify-center text-sm font-[600] text-[13px] transition duration-200
                ${page === 1 ? 'bg-gray-100 text-black' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition duration-200">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsAndBlogsSection;
