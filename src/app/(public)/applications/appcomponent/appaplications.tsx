'use client';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const apps = [
  { title: 'CCSP', image: '/assets/images/bppimg.png' },
  { title: 'POCR', image: '/assets/images/bppimg.png' },
  { title: 'POMS', image: '/assets/images/bppimg.png' },
  { title: 'NOCOPO', image: '/assets/images/bppimg.png' },
  { title: 'PRICE CHECKER', image: '/assets/images/bppimg.png' },
  { title: 'CCSP', image: '/assets/images/bppimg.png' },
];

export default function AppApplications() {
  return (
    <section className="py-16 px-4 bg-white text-center plus">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 max-w-2xl mx-auto mb-10 xl:max-w-7xl">
        <input
          type="text"
          placeholder="Search for application |"
          className="w-full bg-gray-100 px-4 py-3 border border-gray-200 rounded-sm outline-none text-black"
        />
        <button className="bg-[#108A00] text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-700 transition font-[200]">
          SEARCH
          <NorthEastIcon fontSize="small" />
        </button>
      </div>

      {/* App Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {apps.map((app, index) => (
          <div
            key={index}
            className="group bg-[#F4FAF5] p-4 rounded-lg flex flex-col hover:border hover:border-green-700"
          >
            <p className="mt-2 text-[24px] font-[500] text-[#161C2D] mb-2">{app.title}</p>

            {/* Wrapper */}
            <div className="relative w-full h-[200px] rounded-lg shadow overflow-hidden">
              {/* Image*/}
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Hover */}
              <div className="absolute inset-0 bg-green-700 text-white flex flex-col justify-center items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2 text-left w-full">Contractor Registration System</h3>
                <p className="text-[18px] text-center leading-5 text-left">
                  A National Database for the categorization ans Classification of Federal Contractors and service providers across the nations
                </p>
                <div className="bg-black/70 text-white rounded-full p-2 text-black ml-auto mt-2">
                                <NorthEastIcon fontSize="small" />
                              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
