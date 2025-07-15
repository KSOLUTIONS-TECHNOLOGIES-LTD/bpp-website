'use client';
import { useState, useEffect } from 'react';
// import Image from "next/image";

const slides = [
  {
    title: 'Welcome to the',
    description: 'Bureau of Public Procurement',
    image: '/assets/images/Container.png',
    buttonText: 'Read More',
    selectorLabel: 'SUBMIT PETITION',
  },
  {
    title: 'Contractor Registration',
    description:
      'Wish to register as a federal government contractor? You are one step away.',
    image: '/assets/images/Container-1.png',
    buttonText: 'Register',
    selectorLabel: 'CONTRACT REGISTRATION',
  },
  {
    title: 'Procurement Conversion Online Registration',
    description: 'Are you a procurement officer? Update your profile now',
    image: '/assets/images/Container-2.png',
    buttonText: 'Start Here',
    selectorLabel: 'PROCUREMENT OFFICE REGISTRATION',
  },
  {
    title: 'NOCOPO',
    description:
      'Opening up Public Procurement in Nigeria through increased disclosure of procurements infromation.',
    image: '/assets/images/Container-1.png',
    buttonText: 'Click Here',
    selectorLabel: 'CONTRACTING PORTAL',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleManualSelect = (index: number) => {
    setCurrent(index);
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className='w-full bg-white px-4 sm:px-8 md:px-24 pt-[9rem] pb-4 plus '>
      <div className='flex flex-col md:flex-row justify-between items-center gap-2 2xl:max-w-7xl 2xl:mx-auto '>
        <div className='w-full md:w-1/2 max-w-7xl'>
          {current === 0 ? (
            <div className='mb-6'>
              <h1 className='text-3xl md:text-[50px] font-[600] text-black'>
                {slides[0].title}
              </h1>
              <h2 className='text-4xl md:text-[60px] font-[600] text-[#108A00] mt-1 leading-[30px] md:leading-[50px]'>
                {slides[0].description}
              </h2>
            </div>
          ) : (
            <>
              <h1 className='text-4xl md:text-[60px] font-[600] text-[#108A00] md-2 md:mb-6 leading-[30px] md:leading-[60px]'>
                {slides[current].title}
              </h1>
              {slides[current].description && (
                <p className='text-[20px] md:text-[28px] font-[500] text-black mb-2 md:mb-6 leading-[25px] md:leading-[40px]'>
                  {slides[current].description}
                </p>
              )}
            </>
          )}
          <button className='bg-green-700 text-white px-6 py-2 md:py-4 rounded hover:bg-green-800 transition'>
            {slides[current].buttonText}
          </button>
        </div>

        <div className='relative w-full h-64 md:h-[400px] md:w-1/3'>
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Selector */}
      <div className='flex items-center justify-center mt-10 gap-3'>
        <button
          onClick={goToPrevious}
          className='text-2xl transition'
          aria-label='Previous'
        >
          ‹
        </button>

        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleManualSelect(index)}
            className={`plus text-[9px] md:text-[10.5px] font-[500] px-4 py-2 border border-black/50 rounded-lg transition ${
              current === index
                ? 'bg-green-700 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {slide.selectorLabel}
          </button>
        ))}

        <button
          onClick={goToNext}
          className='text-2xl transition'
          aria-label='Next'
        >
          ›
        </button>
      </div>
    </section>
  );
}
