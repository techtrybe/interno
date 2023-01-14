import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamMemberCard = ({member}) => {
  return (
    <article className="bg-white relative max-w-[284px] mx-auto rounded-xl overflow-hidden transition group shadow hover:shadow-md">
      <img className='group-hover:scale-x-0 transition duration-300' src={member.photo} alt={member.name} />

      <div className="py-6 px-4 absolute inset-0 bg-white scale-x-0 opacity-0 transition group-hover:scale-x-100 group-hover:opacity-100 duration-300">
        <div className="flex flex-col items-center h-full justify-between">
          <div className="flex flex-col gap-2 items-center">
            <h3>{member.name}</h3>
            <p className="text-secondary">{member.location}</p>
          </div>
          <div className="flex items-center gap-3 ">
            <button className="bg-lightGray transition hover:bg-primary text-dark w-9 h-9 flex items-center justify-center">
              <FaFacebookF />
            </button>
            <button className="bg-lightGray transition hover:bg-primary text-dark w-9 h-9 flex items-center justify-center">
              <FaTwitter />
            </button>
            <button className="bg-lightGray transition hover:bg-primary text-dark w-9 h-9 flex items-center justify-center">
              <FaLinkedinIn />
            </button>
            <button className="bg-lightGray transition hover:bg-primary text-dark w-9 h-9 flex items-center justify-center">
              <FaGithub />
            </button>
          </div>
          <div className='flex flex-col items-center text-secondary gap-1'>
            <p className='text-lg'>{member.phone}</p>
            <p>{member.email}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TeamMemberCard
