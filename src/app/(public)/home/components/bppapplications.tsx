'use client';

import { motion } from 'framer-motion';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const apps = [
  { title: 'CCSP', image: '/assets/images/bppimg.png' },
  { title: 'POCR', image: '/assets/images/bppimg.png' },
  { title: 'POMS', image: '/assets/images/bppimg.png' },
  { title: 'NOCOPO', image: '/assets/images/bppimg.png' },
  { title: 'PRICE CHECKER', image: '/assets/images/bppimg.png' },
  { title: 'CCSP', image: '/assets/images/bppimg.png' },
];

export default function BppApplications() {
  return (
    <section className="py-16 px-4 bg-white text-center plus">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[35px] md:text-[50px] font-[600] mb-4 text-[#131313]"
      >
        BPP Applications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-[13px] text-[#131313] max-w-2xl mx-auto mb-10 font-[500] leading-[22px]"
      >
        BPP HAS A VARIETY OF APPLICATIONS WHICH HAVE TRANSFORMED THE REGISTRATION
        PROCESS FOR MOST OF HER PROCUREMENT PROCEDURES.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {apps.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group bg-[#F4FAF5] p-4 rounded-lg flex flex-col hover:border hover:border-green-700 transition-all duration-300"
          >
            <p className="mt-2 text-[24px] font-[500] text-[#161C2D] mb-2">{app.title}</p>

            <div className="relative w-full h-[200px] rounded-lg shadow overflow-hidden">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />

              <div className="absolute inset-0 bg-green-700 text-white flex flex-col justify-center items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2 text-left w-full">
                  Contractor Registration System
                </h3>
                <p className="text-lg text-center leading-5 text-left">
                  A National Database for the categorization and classification of Federal Contractors and service providers across the nation.
                </p>
                <div className="bg-black/70 text-white rounded-full p-1 text-black ml-auto mt-2">
                  <NorthEastIcon fontSize="small" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
