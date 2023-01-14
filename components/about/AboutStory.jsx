import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const AboutStory = () => {
  return (
    <section className='py-[5rem] px-4 md:px-6'>
        <div className='w-full max-w-5xl mx-auto flex flex-col gap-[2rem]'>
            <WhatWeDo />
            <EndResult />
        </div>
    </section>
  )
}

const WhatWeDo = () => {
    return (
      <div className="flex flex-col md:flex-row items-start gap-[2rem] md:items-center md:justify-between">
        <div className="flex flex-col gap-4 items-start md:justify-start">
          <h2 className="font-normal">What we do</h2>
          <p className="text-secondary max-w-md">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <button className="bg-dark rounded-2xl shadow-md py-4 px-6 w-fit text-lightGray flex items-center gap-2">
            <span>Our Concept</span>
            <FaArrowRight className="text-primary" />
          </button>
        </div>
        <div>
          <img src="/assets/about/whatwedo.jpg" className='w-[500px] rounded-[40px]' alt="what we do" />
        </div>
      </div>
    );
}
const EndResult = () => {
    return (
      <div className="flex flex-col md:flex-row-reverse items-start gap-[2rem] md:items-center md:justify-between">
        <div className="flex flex-col gap-4 items-start md:justify-start">
          <h2 className="font-normal">The End Result</h2>
          <p className="text-secondary max-w-md">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <button className="bg-dark rounded-2xl shadow-md py-4 px-6 w-fit text-lightGray flex items-center gap-2">
            <span>Our Portfolio</span>
            <FaArrowRight className="text-primary" />
          </button>
        </div>
        <div>
          <img
            src="/assets/about/endresult.jpg"
            className="w-[500px] rounded-[40px]"
            alt="what we do"
          />
        </div>
      </div>
    );
}

export default AboutStory
