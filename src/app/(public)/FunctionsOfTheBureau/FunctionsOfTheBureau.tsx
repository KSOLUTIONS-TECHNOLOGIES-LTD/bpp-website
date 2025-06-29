//import React from 'react';
import { Box, Typography, Container } from '@mui/material'
import Navbar from "../home/components/navbar"
import Footer from "../home/components/footer"

const functions = [
  "Formulate the general policies and guidelines relating to public sector procurement for the approval of the Council",
  "Publicize and explain the provisions of this Act, Functions of the Council The establishment of the Bureau of Public Procurement. Objectives of the Bureau. Functions of the Bureau. Public Procurement Act 2007 No. 14 A 211",
  "Subject to thresholds as may be set by the Council, certify Federal procurement prior to the award of contract;",
  "Supervise the implementation of established procurement policies",
  "Monitor the prices of tendered items and keep a national database of standard prices",
  "Publish the details of major contracts in the procurement journal",
  "Publish paper and electronic editions of the procurement journal and maintain an archival system for the procurement journal",
  "Maintain a national database of contractors and service providers",
  "Collate and maintain an archival system for procurement plans and information",
  "Undertake procurement research and surveys",
  "Organize training programmes for procurement professionals",
  "Periodically review the socioeconomic effect of the policies on procurement and advise the Council accordingly",
  "Review policy effectiveness and advise the Council accordingly",
  "Prepare and update standard bidding and contract documents",
  "Prevent fraudulent and unfair procurement and where necessary apply administrative sanctions;",
"Review the procurement and award of contract procedures of every entity to which this Act applies;",
"Perform procurement audits and submit such report to the National Assembly bi-annually;",
"Introduce, develop, update and maintain related database and technology;",
"Establish a single internet portal that shall, subject to Section 16 (21) to this Act serve as a primary and definitive source of all information on government procurement containing and displaying all public sector procurement information at all times",
"Co-ordinate relevant training programs to build institutional capacity."
];

export default function FunctionsOfTheBureau() {
  return (
    <>
    <Navbar  />
      
     {/* <section
        className="relative h-72 md:h-96 bg-cover bg-center "
        style={{
          backgroundImage: "url('/assets/images/functions.jpg')"
        }}
      >
        <div
    className="absolute inset-0 blue-900/50 bg-opacity-60"
    
  />
        <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-4">
        <p className="text-green-400 text-sm md:text-base tracking-widest uppercase mb-2">
      Public Sector Procurement Roles
    </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            FUNCTIONS OF THE BUREAU
          </h1>
        </div>
      </section> */}

       <section className="relative w-full h-[82vh] flex items-center justify-center text-center text-white pt-28 md:pt-30">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/functions.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bg-black/60 inset-0 bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl plus">
        <p className="text-[11.7px] leading-[100%] text-green-400 font-[700] mb-3 md:mb-6 tracking-wide uppercase">
           Public Sector Procurement Roles
        </p>
        <h1 className="text-4xl md:text-[50px] font-[700] mb-2 md:mb-6">
          FUNCTIONS OF THE BUREAU
        </h1>
        <p className="text-[16px] font-[400] leading-[26.1px] text-[#FFFFFF]">
          {/* We strive to attain excellence through capacity building in procurement */}
        </p>

        {/* icon */}
        
      </div>
    </section>

 <Box sx={{ backgroundColor: '#fff', py: { xs: 5, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', ml: {xs:0, md: 2} }}>
          {/* Dotted vertical line */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 8,
              borderLeft: '2px dotted #1e7c3a',
            }}
          />

          {functions.map((text, index) => (
            <Box key={index} sx={{ position: 'relative', pl:4, mb: { xs: 3, md: 4 } }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  bgcolor: '#1e7c3a',
                  borderRadius: '50%',
                  position: 'absolute',
                  left: 4,
                  top: 6,
                  
                }}
              />
              {/* Text */}
              <Typography
                variant="body1"
                sx={{
                  ml: 4,
                  color: '#222',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.8,
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
   <Footer/>
    </>
  )
}