'use client';

// import Image from 'next/image';

const purposes = [
  {
    icon: '/public/assets/images/one.png',
    text: "The harmonization of existing government policies and practices on public procurement to ensure probity, accountability and transparency in the procurement process;"
  },
  {
    icon: '/public/assets/images/two.png',
    text: "The establishment of pricing standards and benchmarks;"
  },
  {
    icon: '/public/assets/images/three.png',
    text: "Ensuring the application of fair, competitive, transparent, value-for-money standards and practices for the procurement and disposal of public assets;"
  },
  {
    icon: '/public/assets/images/four.png',
    text: "The attainment of transparency, competitiveness, cost effectiveness and professionalism in the public sector procurement system."
  }
];

export default function BppPurpose() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-16 plus">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-2 md:gap-12">
        
        {/* Left Text */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-[50px] font-[600] text-gray-900 mb-6 leading-[30px] md:leading-[55px]">
            The Bureau of Public Procurement was <span className="text-black">establish</span> for
          </h2>

          <ul className="space-y-5 text-gray-700 text-sm md:text-base">
            {purposes.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={`icon-${idx + 1}`}
                  width={24}
                  height={24}
                  className="mt-1 w-6 h-6"
                />
                <p className="text-[16.2px] font-[400] leading-[27px]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        { /*Image */ }
        <div className="flex-1">
          <img
            src="/public/assets/images/bppimg2.png"
            alt="Public Procurement Illustration"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
