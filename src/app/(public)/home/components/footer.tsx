'use client';

import {
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
  Twitter,
  ArrowOutward,
} from '@mui/icons-material';

const footerLinks = [
  {
    title: 'Nigerian Newspaper',
    links: ['Daily News', 'The Guardian', 'Financial Guardian', 'This Day', 'The Punch', 'The Sun'],
  },
  {
    title: 'Development Agencies',
    links: [
      'World Bank',
      'USAID',
      'Department for International Development',
      'European Union',
      'United Nations Development Programme',
      'Central Bank of Nigeria',
    ],
  },
  {
    title: 'Downloads',
    links: [
      'Public Procurement Act 2007',
      'Complaints Procedure',
      'Budget Implementation',
      'Procurement Record Templates',
      'Federal Executive Approved Contracts',
    ],
  },
  {
    title: 'Quick Links',
    links: ['Contact us', 'Mail', 'Archives', 'Privacy Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#06140D] text-white px-6 md:px-16 py-14 plus">
      <div className="max-w-7xl mx-auto">
        <div className='flex justify-between items-center mb-6 md:mb-12'>
            <div className="">
            <h1 className="text-[20px] md:text-[50px] font-[700] text-green-600">Bureau of Public Procurement</h1>
            </div>

            <div className="flex gap-4 mt-6 text-gray-300">
          <img src="/assets/images/instagram.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
          <img src="/assets/images/twitter.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
          <img src="/assets/images/facebook.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
          <img src="/assets/images/linkedin.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
          <img src="/assets/images/youtube.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
        </div>
        </div>
        {/* Top  */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Logo */}
        

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="uppercase text-[11px] font-[600] text-gray-300 mb-6">{section.title}</h4>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <ArrowOutward sx={{ fontSize: '19px', color: '#16a34a', marginTop: '4px' }} />
                      <span className="hover:underline cursor-pointer text-[14px] font-[400] mb-4">{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Office */}
            <div>
              <h4 className="uppercase text-sm font-semibold text-gray-300 mb-4">Head Office</h4>
              <p className="flex items-start gap-1 text-sm">
                <ArrowOutward sx={{ fontSize: '19px', color: '#16a34a', marginTop: '4px' }} />
                <span className='text-[14px] font-[400]'>
                  No. 11, Suleiman Barau Street, Presidential Villa, Abuja FCT, Nigeria
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-3">
          <p className='text-[11px] font-[500] uppercase'>
            <span className="text-green-500 font-[600] uppercase">© Copyright 2025</span>, All rights reserved | Bureau of Public Procurement
          </p>
          <p className="text-white text-[11px] font-[500]">
            <span className="text-green-500 uppercase font-[600]">Powered by</span> - TECHSPECIALIST CONSULTING LIMITED
          </p>
        </div>

        

      </div>
    </footer>
  );
}
