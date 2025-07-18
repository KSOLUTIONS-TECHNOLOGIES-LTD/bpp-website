'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <section className="bg-white min-h-screen pt-28 md:pt-40 pb-16 px-4 flex flex-col items-center plus overflow-hidden">
      
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-sm text-green-500 uppercase tracking-widest font-medium text-center mb-2"
      >
        Register with ease on our enhanced application
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-[40px] font-bold text-center mb-10 uppercase"
      >
        Petition Submission
      </motion.h1>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="bg-white shadow-md rounded-md p-8 max-w-3xl w-full space-y-2 border border-gray-200 xl:max-w-7xl"
      >
        <p className="text-gray-700 font-[500] text-[17px]">Kindly fill the form and make your submission</p>
        <p className="text-red-500 text-[14px]">* <span className='text-gray-800'>Indicates required field</span></p>

        {/* Fields */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {[
            { name: 'firstName', type: 'text', placeholder: 'First name' },
            { name: 'lastName', type: 'text', placeholder: 'Last name' },
            { name: 'email', type: 'email', placeholder: 'Your Email' },
            { name: 'phoneNumber', type: 'text', placeholder: 'Phone Number' },
            { name: 'address', type: 'text', placeholder: 'Address' },
          ].map(({ name, type, placeholder }) => (
            <motion.input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={handleChange}
              required
              className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          ))}

          <motion.select
            name="country"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black font-[400]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <option value="">Country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
          </motion.select>

          <motion.select
            name="state"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <option value="">State/Province/Region</option>
            <option value="Lagos">Lagos</option>
            <option value="Accra">Accra</option>
            <option value="Nairobi">Nairobi</option>
          </motion.select>

          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          <motion.select
            name="stage"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <option value="">Procurement Stage</option>
            <option value="Initiation">Initiation</option>
            <option value="Evaluation">Evaluation</option>
            <option value="Award">Award</option>
          </motion.select>

          <motion.input
            type="text"
            name="details"
            placeholder="Petition Details"
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-sm px-4 py-2 w-full bg-[#EEEEEE] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          className="flex justify-end mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-md transition flex gap-2 items-center plus"
          >
            Submit
            <NorthEastIcon fontSize="small" className="text-sm" />
          </motion.button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default PetitionForm;
