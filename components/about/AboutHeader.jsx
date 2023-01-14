import React from "react";

const AboutHeader = () => {
  return (
    <>
      <div className="w-full min-h-[300px] relative object-fill">
        <img
          src="/assets/about-banner.png"
          alt="About interno"
          className="absolute h-full -z-10 inset-0 w-full"
        />
        <div className="bg-white rounded-t-3xl absolute left-[50%] translate-x-[-50%] p-4 py-6 w-full bottom-0 flex flex-col items-center gap-4 max-w-xs">
          <h2 className="text-dark">About Us</h2>
          <p className="text-secondary">Home / About Us</p>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
