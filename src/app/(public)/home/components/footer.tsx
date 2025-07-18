'use client';

import {
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
  Twitter,
  ArrowOutward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#06140D] text-white px-6 md:px-16 py-14 plus"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex justify-between items-center mb-6 md:mb-12"
          variants={itemVariants}
        >
          <div>
            <h1 className="text-[20px] md:text-[50px] font-[700] text-green-600">
              Bureau of Public Procurement
            </h1>
          </div>

          <div className="flex gap-4 mt-6 text-gray-300">
            {['instagram', 'twitter', 'facebook', 'linkedin', 'youtube'].map((platform, i) => (
              <motion.img
                key={platform}
                src={`/assets/images/${platform}.png`}
                alt={platform}
                className="h-[16.5px] w-[16.5px] hover:scale-125 transition-transform duration-300"
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="flex flex-col lg:flex-row lg:justify-between gap-12"
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
            {footerLinks.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h4 className="uppercase text-[11px] font-[600] text-gray-300 mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-1"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowOutward
                        sx={{ fontSize: '19px', color: '#16a34a', marginTop: '4px' }}
                      />
                      <span className="hover:underline cursor-pointer text-[14px] font-[400] mb-4">
                        {link}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Office Address */}
            <motion.div variants={itemVariants}>
              <h4 className="uppercase text-sm font-semibold text-gray-300 mb-4">
                Head Office
              </h4>
              <p className="flex items-start gap-1 text-sm">
                <ArrowOutward
                  sx={{ fontSize: '19px', color: '#16a34a', marginTop: '4px' }}
                />
                <span className="text-[14px] font-[400]">
                  No. 11, Suleiman Barau Street, Presidential Villa, Abuja FCT, Nigeria
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-3"
          variants={itemVariants}
        >
          <p className="text-[11px] font-[500] uppercase">
            <span className="text-green-500 font-[600] uppercase">© Copyright 2025</span>, All rights reserved | Bureau of Public Procurement
          </p>
          <p className="text-white text-[11px] font-[500]">
            <span className="text-green-500 uppercase font-[600]">Powered by</span> - TECHSPECIALIST CONSULTING LIMITED
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
