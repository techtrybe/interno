import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="rounded-3xl flex flex-col gap-4 bg-white py-[2rem] pt-[3rem] md:pt-[4rem] shadow-sm px-[2rem]">
      <div className="flex gap-4">
        <img
          src={testimonial.img}
          className="w-[4rem] h-[4rem]"
          alt={testimonial.name}
        />
        <div>
          <h3 className="text-lg text-dark font-normal">{testimonial.name}</h3>
          <p className="text-lg text-[#4D5053]">{testimonial.location}</p>
        </div>
      </div>
      <div className="text-[#4D5053]">
        <p className="leading-[150%]  text-lg">{testimonial.body}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;
