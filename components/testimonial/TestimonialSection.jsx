import React from "react";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Nattasha Mith",
    location: "Sydney, USA",
    img: "/assets/benny.png",
    body: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book."
  },
  {
    name: "Raymond Galario",
    location: "Sydney, Australia",
    img: "/assets/raymond.png",
    body: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book."
  },
  {
    name: "Benny Roll",
    location: "Sydney, New York",
    img: "/assets/benny.png",
    body: "Lorem Ipsum is simply dummy text of the typesetting industry."
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-[5rem]">
      <div className="max-w-6xl bg-[#F4F0EC] rounded-t-3xl md:rounded-t-[5rem] rounded-b-2xl py-[3rem] px-6">
        <Heading />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((testimonial, index) => (
                <TestimonialCard testimonial={testimonial} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

function Heading() {
  return (
    <div className="w-full flex flex-col items-center gap-2 max-w-lg mx-auto">
      <h2 className="capitalize text-dark font-normal text-[40px] text-center">What the people thinks about us</h2>
    </div>
  );
}

export default TestimonialSection;
