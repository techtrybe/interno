import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full p-4">
      <div className="w-full max-w-6xl mx-auto min-h-[300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-start gap-6">
            <img src="/assets/logo.png" alt="interno" />
            <p className="text-secondary">
              Let’s Get Solution For Building Construction Work
            </p>
            <div className="flex gap-2 items-center">
              <button className="h-10 w-10 bg-lightGray hover:bg-primary text-dark flex items-center justify-center rounded-full">
                <FaFacebookF />
              </button>
              <button className="h-10 w-10 bg-lightGray hover:bg-primary text-dark flex items-center justify-center rounded-full">
                <FaTwitter />
              </button>
              <button className="h-10 w-10 bg-lightGray hover:bg-primary text-dark flex items-center justify-center rounded-full">
                <FaLinkedin />
              </button>
              <button className="h-10 w-10 bg-lightGray hover:bg-primary text-dark flex items-center justify-center rounded-full">
                <FaInstagram />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h4 className="text-dark font-normal text-lg">Pages</h4>
            <div className="text-secondary flex flex-col gap-4">
              <p>About Us</p>
              <p>Our Project</p>
              <p>Contact Us</p>
              <p>Our Team</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-dark font-normal text-lg">Services</h4>
            <div className="text-secondary flex flex-col gap-4">
              <p>Kitchen</p>
              <p>Living Area</p>
              <p>Bathroom</p>
              <p>Dining Hall</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-dark font-normal text-lg">Contact</h4>
            <div className="text-secondary flex flex-col gap-4">
              <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
              <p>contact@interno.com</p>
              <p>(123) 456 - 7890</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-secondary mt-[2rem]">
        Copyright © Interno | Designed by Victorflow Templates - Built by <Link className="underline" target={"_blank"} href="https://madflows.dev">Madflows</Link>
      </p>
    </footer>
  );
};

export default Footer;
