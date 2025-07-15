'use client';

import NorthEastIcon from '@mui/icons-material/NorthEast';
import DescriptionIcon from '@mui/icons-material/Description';

const documents = [
  'Public Procurement Act 2007',
  'Revised Standard Bidding Documents (SBDs)',
  'FEC Project Performance Documents',
  'Public Procurement Documents',
  'Registration procedure',
  'FEC Approved Policies',
  'Certificates of “No Objection”',
  'Newsletters',
];

export default function DocumentSection() {
  return (
    <section className="bg-[#f1fafa] py-16 px-4 text-center plus ">
      
      <h2 className="text-[30px] md:text-[50px] font-[600] text-black mb-2 leading-[100%] mb-6 md:mb-4">Public Procurement Document</h2>
      <p className="text-gray-600 text-[13px] mb-8 uppercase tracking-wide font-[500]">
        Making it easier to have quick access to procurement documents
      </p>

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search for related document"
          className="w-full px-4 py-3 border border-gray-100 rounded-md outline-none bg-white text-black"
        />
        <button className="bg-[#108A00] text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-700 transition">
          SEARCH
          <NorthEastIcon fontSize="small" />
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              <DescriptionIcon fontSize="large" className="text-green-600 text-8xl" />
            </div>
            <p className="text-black font-[700] text-[18px]">{doc}</p>
          </div>
        ))}
      </div>

      
      <div className="mt-16 flex justify-center">
        <button className="bg-[#108A00] text-white px-20 py-4 rounded-sm text-[20px] font-[500] flex items-center gap-2 hover:bg-green-700 transition">
          Access all document
          <NorthEastIcon fontSize="small" />
        </button>
      </div>
    </section>
  );
}
