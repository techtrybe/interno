import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-start pt-10 md:mt-10">
      <div className="flex flex-col gap-4">
        <h2 className='text-[45px] md:text-display max-w-md text-dark'>Let Your Home Be Unique</h2>
        <span className='text-secondary'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita?
        </span>
        <button className='bg-dark rounded-2xl shadow-md py-4 px-6 w-fit text-lightGray flex items-center gap-2'>
          <span>Get Started</span>
          <FaArrowRight className='text-primary' />
        </button>
      </div>
    </section>
  );
}

export default Hero
