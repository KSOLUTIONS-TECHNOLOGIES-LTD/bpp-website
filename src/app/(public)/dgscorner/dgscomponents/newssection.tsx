'use client';

import { useState } from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const news = [
  {
    title: 'Hold us responsible if FG fails to deliver roads, other projects due to procurement lapses',
    category: 'Technical Report',
    date: 'May 19, 2025',
    image: '/assets/images/newsimg1.png',
  },
  {
    title: 'BPP, PCNQI partner on clean energy transition',
    category: 'Project Activity',
    date: 'May 18, 2025',
    image: '/assets/images/newsimg2.png',
  },
  {
    title: "BPP: Adesokun Adebowale's silent revolution to reform procurement",
    category: 'Procurement Reform',
    date: 'May 17, 2025',
    image: '/assets/images/newsimg2.png',
  },
];

export default function NewsSection() {
  const [search, setSearch] = useState('');

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 px-4 md:px-10 bg-white w-full plus">
      <h2 className="text-2xl md:text-[30px] font-semibold text-center mb-8 max-w-7xl">
        Recent News and Publications from DG
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Publications"
            className="border px-4 py-3 rounded-md w-full sm:w-140 text-sm bg-gray-100"
          />
          <button className="bg-green-600 text-white px-5 py-3 rounded-md text-sm hover:bg-green-700 transition">
            SEARCH
            <NorthEastIcon fontSize="small" />
          </button>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition flex flex-col h-full"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              {/* Texts below image */}
              <div className="flex flex-col justify-between flex-grow p-4">
                <div className="space-y-1">
                  <p className="text-[15px] text-gray-500">{item.category}</p>
                  <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-relaxed">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[15px] text-gray-400 mt-4">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
