import React from "react";

const AboutHeader = () => {
  return (
    <section className="space-y-20 w-full">
      <div className="w-full min-h-[300px] relative">
        <img
          src="/assets/about-banner.png"
          alt="About interno"
          className="absolute h-full -z-10 inset-0 w-full"
        />
        <div className="bg-white rounded-t-3xl absolute left-[50%] translate-x-[-50%] p-4 py-6 w-full z-0 bottom-0 flex flex-col items-center gap-4 max-w-xs">
          <h2 className="text-dark">About Us</h2>
          <p className="text-secondary">Home / About Us</p>
        </div>
      </div>
      <QuoteSection />
    </section>
  );
};

const QuoteSection = () => {
    return (
      <section className="p-4">
        <div className="flex flex-col items-center gap-4 justify-center max-w-md md:max-w-xl px-4 quote-card">
          <span className="text-5xl text-dark leading-none">"</span>
          <em className="text-dark text-3xl text-center max-w-sm">
            I like an interior that defies labeling. I don't really want someone
            to walk into a room and know that I did it
          </em>
          <p className="text-secondary uppercase tracking-wide">-BUNNY WILLIAMS</p>
        </div>
      </section>
    );
}

export default AboutHeader;
