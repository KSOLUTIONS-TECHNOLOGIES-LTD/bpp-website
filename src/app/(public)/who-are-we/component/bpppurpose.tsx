'use client';

import { motion } from 'framer-motion';

const purposes = [
  {
    icon: '/assets/images/one.png',
    text: "The harmonization of existing government policies and practices on public procurement to ensure probity, accountability and transparency in the procurement process;"
  },
  {
    icon: '/assets/images/two.png',
    text: "The establishment of pricing standards and benchmarks;"
  },
  {
    icon: '/assets/images/three.png',
    text: "Ensuring the application of fair, competitive, transparent, value-for-money standards and practices for the procurement and disposal of public assets;"
  },
  {
    icon: '/assets/images/four.png',
    text: "The attainment of transparency, competitiveness, cost effectiveness and professionalism in the public sector procurement system."
  }
];

export default function BppPurpose() {
  return (
    <section className="w-full bg-white pt-24 pb-10 px-4 md:px-22 plus">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl 2xl:mx-auto items-center gap-10">
        
        
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-[42px] font-[600] text-gray-900 mb-6 leading-[30px] md:leading-[45px]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Bureau of Public Procurement was <span className="text-black">establish</span> for
          </motion.h2>

          <ul className="space-y-5 text-gray-700 text-sm md:text-base">
            {purposes.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.icon}
                  alt={`icon-${idx + 1}`}
                  width={24}
                  height={24}
                  className="mt-1 w-6 h-6"
                />
                <p className="text-[15px] font-[400] leading-[27px]">{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/bppimg2.png"
            alt="Public Procurement Illustration"
            width={600}
            height={400}
            className="w-full h-auto md:w-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
