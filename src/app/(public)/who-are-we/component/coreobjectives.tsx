'use client';

const objectives = [
  {
    icon: '/assets/images/container1.png',
    title: 'Economic Efficiency',
  },
  {
    icon: '/assets/images/container2.png',
    title: 'Competition',
  },
  {
    icon: '/assets/images/container3.png',
    title: 'Value for money',
  },
  {
    icon: '/assets/images/container4.png',
    title: 'Transparency',
  },
];

export default function CoreObjectives() {
  return (
    <section className="w-full bg-white pt-6 pb-12 md:pb-24 px-4 md:px-24 plus">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-[40px] font-[700] text-gray-800 mb-6 leading-[58px]">
          Our Core Objectives
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition border border-gray-200"
            >
              <img
                src={obj.icon}
                alt={obj.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg md:text-[19px] font-[700] text-gray-800 leading-[32px]">
                {obj.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
