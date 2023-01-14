import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-[5rem]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center max-w-md mx-auto mb-[2rem]">
          Creative project? Let's have a productive talk.
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[3rem]">
            <label>
              <input type="text" placeholder="Name" />
            </label>
            <label>
              <input type="email" placeholder="Email" />
            </label>

            <textarea
              className="md:col-span-2"
              placeholder="Hello, I am interested in.."
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="bg-dark mt-5 rounded-2xl shadow-md py-4 px-6 w-full sm:w-fit text-lightGray flex items-center gap-2">
            <span>Send Now</span>
            <FaArrowRight className="text-primary" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection
