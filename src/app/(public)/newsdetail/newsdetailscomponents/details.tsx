import React from 'react';


interface ArticleSectionProps {
  
}

const ArticleSection: React.FC<ArticleSectionProps> = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pt-[9rem] plus pb-16 plus">
      

      <div className="container mx-auto px-4 pt-4 md:px-6 lg:px-8 max-w-4xl">
        <button className="inline-block bg-[#108A00] text-white text-xs font-[400] px-4 py-2  mb-4 hover:bg-green-700 transition-colors duration-200 rounded-sm text-[16px]" >
         Finance
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4  md:px-6 lg:px-8 max-w-4xl">
        
        <h1 className="text-2xl sm:text-3xl lg:text-[35px] font-bold leading-tight mb-2 text-gray-900">
          Hold us responsible if FG fails to deliver roads, other projects due
          to procurement lapses
        </h1>

        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-600 mb-6 pb-4"> 
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <img src="/assets/images/newsguy.png" alt="Logo" className="h-[17.5px] w-[17.5px]" />
            <span className="font-semibold">By: Podent Princess</span>
            
            {/* <span className="hidden sm:inline-block">|</span> */}
            <span className="hidden sm:inline-block ml-6">11 Mins Read</span>

            <span className="hidden sm:inline-block">-</span>
            <span>Oct 2, 2025</span>
          </div>

          {/* Socials*/}
          <div className="flex items-center space-x-3">

            <div className='flex items-center mr-6 gap-1'>
              <img src="/assets/images/bookmark.png" alt="Logo" className="h-[14.5px] w-[14.5px]" />
              <p>Bookmark</p>
            </div>

            <span className="hidden md:inline-block">Share:</span>
            {/* Facebook*/}
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <img src="/assets/images/newsfacebook.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
            </a>
            {/* Twitter */}
            <a href="#" className="text-gray-500 hover:text-blue-400">
              <img src="/assets/images/newspin.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
            </a>
            {/* YouTube */}
            <a href="#" className="text-gray-500 hover:text-red-600">
              <img src="/assets/images/newstwitter.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
            </a>
            {/* LinkedIn*/}
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <img src="/assets/images/newswhatsapp.png" alt="Logo" className="h-[16.5px] w-[16.5px]" />
            </a>
            {/* Print/Share*/}
            {/* <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8H5c-1.657 0-3 1.343-3 3v6c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-6c0-1.657-1.343-3-3-3zm-3 11H8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1zm-1-8c0 .552-.448 1-1 1s-1-.448-1-1v-4c0-.552.448-1 1-1s1 .448 1 1v4zm-2-7h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1z"/>
              </svg>
            </a> */}
          </div>
        </div>

        {/*Article Image */}
        <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/images/newsimg1.png" // Placeholder image
            alt="Two men in suits shaking hands"
            className="w-full h-[500px] object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {

              e.currentTarget.src = "https://placehold.co/800x450/cccccc/333333?text=Image+Load+Error";
              e.currentTarget.onerror = null; 
            }}
          />
          
          
        </div>


        <div className=" max-w-7xl text-gray-800 mt-10 leading-[33px] plus">

            <p className=" text-[16px]">
            Director General of Bureau of Public Procurement (BPP), Dr Adebowale Adedokun, on Tuesday, told Nigerians to spare President Bola Tinubu as well as the State Governors and, where they should hold him and all procurement officers responsible if government at all levels failed to deliver road and other infrastructural projects due to procurement lapses.
          </p>
          <p className=" text-[16px]">
            Adedokun spoke in Abuja at the high-impact educational symposium organised by the Chartered Institute of Procurement and Supply (CIPS), Nigeria Branch, with the theme: "Driving Value and sustainability in resource-limited settings via strategic procurement", at which CIPS Global CEO, Ben Farrell, MBE, served as a panelist.
          </p>
          <p className=" text-[16px]">
            He said that globally, professionals helped politicians to implement their governance objectives on the plank of the pieces of professional advice given to public office holders by the procurement bureau and certified procurement officers.
          </p>
          <p className=" text-[16px]">
            "In where I tell you that you require professional cadre that would conduce to effective implementation or execution of projects, then I should be held accountable. I am saying today that all procurement officers in Nigeria who give the wrong advice to their superior would be held accountable.
          </p>
          <p className="text-[16px]">
            "The accounting officers are also going to be held accountable for failure to implement government objectives. This applies to other tiers of government. This is the reason we are working closely with the anti-corruption agencies to ask them to hold everybody accountable."
          </p>

          <p className=" text-[16px]">Adedokun, who, on the occasion of the symposium, was certified as a chartered Procurement and Supply Professional [making him the 913th fellow of the CIPS Global], said that in the BPP resolve to be held accountable, the Bureau had undercored the necessity of trainin</p>

          <p className=" text-[16px]">According to him, “To do that, give them [procurement officers] knowledge, empower them, give them skill. You do not judge somebody who does not know. So the first thing BPP is doing is to build capacity, provide online training through the Sustainable Procurement, Environmental and Social Standards Enhacement [SPESSE] project, and provide hands-on training. All these are avenues because we have lost ten years and we need to make up.
“There are massive projects going on, but where are the skills, who are the professionals, where are the engineers? We know now that BPP is going to bring together core professionals in every sector so that we can monitor and evaluate progress and also report to Mr. President that things are being done rightly or wrongly.</p>

<p className=" text-[16px]">“If things are being done wrongly, we will recommend to him in line with the provisions of the Public Procurement Act 2007 appropriate discipline for anybody who causes government to lose money. That is the way we are moving and collectively we can make Nigeria the Dubai of Africa.”
Meanwhile, in a post-symposium interview by journalists, Adedokun said that the government of President Tinubu through the BPP would reduce bureaucracy in procurement by going digital.</p>

<p className=" text-[16px]">According to him, “We are going to do it in such a way that it grows from small, medium scale to massive projects. So that is the way to go: to make sure that across the entire country, opportunities are created to do business.
“This is the time to grow our local industry.</p>
          
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
