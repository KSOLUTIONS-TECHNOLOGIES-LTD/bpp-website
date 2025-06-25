import React from 'react';
import Navbar from "../home/components/navbar"
import Footer from "../home/components/footer"

interface PetitionSubmissionItem {
  title: string;
  file: string;
}

const petitions: PetitionSubmissionItem[] = [
  { title: '2017–Petitions Summary', file: '/downloads/2017-summary.pdf' },
  { title: '2017–Petitions Compressed', file: '/downloads/2017-compressed.pdf' },
  { title: '2016–Petitions Summary', file: '/downloads/2016-summary.pdf' },
  { title: '2016–Petitions Compressed', file: '/downloads/2016-compressed.pdf' },
];

const PetitionSummary: React.FC = () => {
  return (
     <>
        <Navbar  />
    <section className="pb-28 pt-48 px-4 text-center plus bg-white">
      <h2 className="text-3xl md:text-[40px] font-[500] mb-4">PETITION SUMMARY</h2>
      <p className="text-[15] mb-10 uppercase tracking-wide text-gray-600">
        Click the links below to download the petition reports
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {petitions.map((petition, index) => (
          <a
            key={index}
            href={petition.file}
            className="bg-white rounded-md shadow p-6 no-underline text-center w-full max-w-xs hover:shadow-lg transition "
            download
          >
            <div
              className="h-16 w-16 mx-auto bg-center bg-no-repeat bg-contain mb-4"
              style={{ backgroundImage: "url('/assets/images/pdfs.png')" }}
            />
            <p className="text-2xl md:text-[15px] font-bold text-gray-800 no-underline  uppercase">{petition.title}</p>
           

          </a>
        ))}
      </div>
    </section>
     <Footer/>
     </>
  );
};

export default PetitionSummary;
