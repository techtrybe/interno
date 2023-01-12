import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

export const EstimateSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 py-[5rem] px-4">
      <div className="flex flex-col gap-[1rem] max-w-md">
        <h2 className="text-[#292F36] text-[50px] font-normal">
          We Create The Art Of Stylish Living Stylishly
        </h2>
        <p className="text-[#4D5053] font-normal">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>

        <div className="flex gap-2 w-fit items-center">
          <img
            src="/assets/call-icon.svg"
            className="w-[55px] h-[55px]"
            alt="call icon"
          />
          <div className="flex flex-col items-start text-sm text-[#4D5053]">
            <p className="font-bold">012345678</p>
            <p>Call us anytime</p>
          </div>
        </div>
        <button className="bg-dark rounded-2xl shadow-md py-4 px-6 w-fit text-lightGray flex items-center gap-2">
          <span className='capitalize'>Get free estimate</span>
          <FaArrowRight className="text-primary" />
        </button>
      </div>

      <div className='hidden md:flex'>
        <img src="/assets/estimate-img.jpg" className='rounded-tr-[12rem] rounded-bl-[5rem]' alt="estimate" />
      </div>
    </section>
  );
}
