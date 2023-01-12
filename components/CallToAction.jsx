import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="bg-dark rounded-[40px] py-[3rem] px-6 my-10">
      <div className='w-full max-w-2xl flex flex-col gap-4 items-center text-center text-white mx-auto'>
        <h2 className='font-normal'>Wanna Join the Interno?</h2>
        <p className='font-normal text-center'>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
        <button className="bg-primary rounded-2xl shadow-md py-4 px-6 w-full max-w-[200px] flex items-center justify-center gap-2">
          <span className='text-white'>Contact Us</span>
          <FaArrowRight className="text-dark" />
        </button>
      </div>
    </section>
  );
}

export default CallToAction
