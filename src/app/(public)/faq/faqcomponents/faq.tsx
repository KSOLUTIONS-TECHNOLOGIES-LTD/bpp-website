'use client';

import { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const faqs = [
  {
    question: "WHAT DOES BPP STAND FOR?",
    answer:
      "BPP – stands for Bureau of Public Procurement, which is a federal government parastatal charged with the responsibility of regulating Public procurement processes in the country by ensuring that Due process is followed.",
  },
  {
    question:
      "WHY SHOULD I REGISTER WITH THE BPP DATABASE OF CONTRACTORS, CONSULTANTS AND SERVICE PROVIDERS?",
    answer:
      "Registration ensures compliance with government procurement laws and qualifies you to bid for public contracts.",
  },
  {
    question: "WHO SHOULD REGISTER?",
    answer:
      "All contractors, consultants, and service providers seeking to do business with the government must register with the BPP.",
  },
  {
    question: "WHAT IF I DO NOT REGISTER?",
    answer:
      "Failure to register disqualifies you from participating in federal procurement opportunities.",
  },
  {
    question: "DO FOREIGN CONTRACTORS HAVE TO REGISTER?",
    answer:
      "Yes, foreign contractors intending to bid for Nigerian government contracts must register with the BPP.",
  },
  {
    question:
      "WHAT IS THE FIRST THING I SHOULD DO IF I AM CONSIDERING APPLYING TO REGISTER WITH THE BPP?",
    answer:
      "Visit the BPP portal and review the registration guidelines and requirements before starting your application.",
  },
  {
    question: "WHAT ARE THE CRITERIA REQUIRED TO REGISTER WITH BPP?",
    answer:
      "You must meet financial, legal, and technical requirements outlined in the registration criteria on the BPP portal.",
  },
  {
    question: "DO I NEED TO TAKE ANY SPECIAL CLASSES OR TESTS BEFORE I REGISTER?",
    answer:
      "Some categories may require certification or training. Check the specific requirements for your business type.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-44 pb-16 px-4 md:px-10 w-full mx-auto bg-white plus">
      <h2 className="text-center text-3xl md:text-[38px] font-bold text-gray-900">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className="text-center text-[16px] text-gray-500 mt-4 font-[400]">
        Learn from frequently asked questions from procurement officer
      </p>

      <div className="mt-10 md:mt-14 space-y-4 max-w-xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg px-4 py-3 transition-all bg-white"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-[15px] font-semibold text-gray-800 uppercase md:leading-[180%]">
                {faq.question}
              </span>
              {openIndex === index ? (
                <KeyboardArrowDownIcon className="text-gray-600" />
              ) : (
                <KeyboardArrowRightIcon className="text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <p className="text-[14px] font-[400] text-gray-600 mt-3 md:leading-[130%]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <p className="text-center text-[16px] mt-8 text-gray-600">
        Haven’t gotten your answer?{' '}
        <a href="#" className="text-green-600 font-[300] no-underline">
          Contact our support now
        </a>
      </p>
    </section>
  );
}
