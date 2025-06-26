'use client'

import React, { useState } from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const PetitionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    country: '',
    state: '',
    subject: '',
    stage: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <section className=" bg-white min-h-screen pt-28 md:pt-40 pb-16 px-4 flex flex-col items-center plus">
      <p className="text-sm text-green-500 uppercase tracking-widest font-medium text-center mb-2">
        Register with ease on our enhanced application
      </p>
      <h1 className="text-3xl md:text-[40px] font-bold text-center mb-10 uppercase">
        Petition Submission
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-8 max-w-3xl w-full space-y-2 border border-gray-200"
      >
        <p className="text-gray-700 font-[500] text-[17px]">Kindly fill the form and make your submission</p>
        <p className="text-red-500 text-[14px]">* <span className='text-gray-800'>Indicates required field</span></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
          />
          <select
            name="country"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full  bg-[#EEEEEE] text-black font-[400]"
          >
            <option value="">Country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
          </select>
          <select
            name="state"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
          >
            <option value="">State/Province/Region</option>
            <option value="Lagos">Lagos</option>
            <option value="Accra">Accra</option>
            <option value="Nairobi">Nairobi</option>
          </select>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
          />
          <select
            name="stage"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
          >
            <option value="">Procurement Stage</option>
            <option value="Initiation">Initiation</option>
            <option value="Evaluation">Evaluation</option>
            <option value="Award">Award</option>
          </select>
          <input
            type="text"
            name="details"
            placeholder="Petition Details"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-md transition flex gap-2 items-center plus"
          >
            Submit 
            <NorthEastIcon fontSize="small" className='text-sm'/>
          </button>
        </div>
      </form>
    </section>
  );
};

export default PetitionForm;
