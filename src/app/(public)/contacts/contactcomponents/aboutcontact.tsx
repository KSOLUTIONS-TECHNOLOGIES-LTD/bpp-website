'use client';

import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const ContactSection = () => {
  return (
    <section className="bg-white pb-16 px-4 pt-44">
      <div className="max-w-7xl mx-auto plus">
        {/* Header */}
        <h2 className="text-[40px] font-[500] text-center mb-4">CONTACT US</h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-[18px] font-[400]">
          For information and clarifications please contact our help desk officer through the contact form.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center text-center mb-8 max-w-3xl mx-auto">
          <div className='flex gap-4 items-center'>
            <img src="/assets/images/contacticon.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
            <div>
              <p className="font-semibold text-left mb-4 text-[19px]">Opening Hours</p>
              <p className="text-gray-600 text-[16px]">8:00AM - 5:00PM</p>
            </div>
          </div>
          <div className='flex gap-6'>
            <EmailIcon className="text-green-600 mb-2" fontSize="medium" />
            <div>
              <p className="font-semibold text-left mb-4 text-[19px]">Email us</p>
              <p className="text-gray-600 text-[16px]">info@bpps.gov.ng</p>
            </div>
          </div>
          <div className='flex gap-4 mt-4'>
            <LocationOnIcon className="text-green-600 mb-2" fontSize="medium" />
            <div>
              <p className="font-semibold text-left mb-2 text-[19px]">Office Address</p>
              <p className="text-gray-600 text-sm text-left text-[16px]">
                No. 11, Suleiman Barau Street, Presidential Villa<br />Abuja, FCT Nigeria.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-lg drop-shadow-lg shadow-[#EEEEEE] border border-gray-200 p-6 md:p-8 max-w-3xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className='text-[15px] text-[#161C2D]'>First & Last Name</label>
              <input
                type="text"
                placeholder="i.e. John Doe"
                className="border border-gray-300 rounded px-4 py-2 text-sm w-full text-md mt-2"
              />
            </div>

            <div className='text-[15px] text-[#161C2D]'>
              <label >Email</label>
              <input
                type="email"
                placeholder="i.e. John@gmail.com"
                className="border border-gray-300 rounded px-4 py-2 text-sm w-full text-md mt-2"
              />
            </div>

            <div>
              <label className='text-[15px] text-[#161C2D]'>Phone Number</label>
              <input
                type="text"
                placeholder="i.e. +234-567-7890"
                className="border border-gray-300 rounded px-4 py-2 text-sm w-full text-md mt-2"
              />
            </div>

            <div>
              <label className='text-[15px] text-[#161C2D]'>Subject</label>
              <input
                type="text"
                placeholder="i.e. i need help"
                className="border border-gray-300 rounded px-4 py-2 text-sm w-full text-md mt-2"
              />
            </div>

            {/* Updated Textarea */}
            <div className="md:col-span-2 mb-4">
              <label className='text-[15px] text-[#161C2D]'>Message</label>
              <textarea
                placeholder="Type your message"
                className="border border-gray-300 rounded px-4 py-2 text-sm w-full h-28 resize-none text-md mt-2"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-[#108A00] text-white px-12 py-2 text-sm rounded hover:bg-green-700 transition flex flex-row items-center"
              >
                SEND
                <NorthEastIcon fontSize="small" className='text-sm ml-2' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
