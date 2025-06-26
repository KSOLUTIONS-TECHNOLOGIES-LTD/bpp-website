'use client';

// import Image from 'next/image';

const BPPTrainingSection = () => {
  return (
    <section className="bg-[#f8fbff] py-16 px-4 md:px-20">
      <div className="max-w-5xl flex flex-col md:flex-row justify-center items-center mx-auto">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/public/assets/images/trainingimg.png" 
            alt="BPP Training"
            // width={600}
            // height={500}
            className="rounded-lg object-cover h-fit"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-[45px] font-bold text-gray-900 mb-4">
            BPP Trainings
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-[16px]">
            To provide skilled workforce and professionals for public procurement management through training, research, and development.
          </p>
          <p className="text-gray-700 leading-relaxed text-[16px]">
            We are creating a transparent, dynamic and world-class procurement workforce across the nation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BPPTrainingSection;
