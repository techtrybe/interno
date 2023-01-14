import React from 'react'
import TeamMemberCard from './TeamMemberCard';

const members = [
  {
    name: "Natasha Julie",
    location: "Design, Australia",
    phone: "+1 (378) 400-1234",
    email: "julie@email.com",
    photo: "/assets/team/01.png",
  },
  {
    name: "Vikram Samir",
    location: "Frontend, Ethiopia",
    phone: "+1 (378) 400-1234",
    email: "samir@email.com",
    photo: "/assets/team/02.png",
  },
  {
    name: "Ogbeni Dan",
    location: "CEO, Australia",
    phone: "+1 (378) 400-1234",
    email: "dan@email.com",
    photo: "/assets/team/03.png",
  },
  {
    name: "John Doe",
    location: "Design, Canada",
    phone: "+1 (358) 400-1234",
    email: "hotjohn@email.com",
    photo: "/assets/team/01.png",
  },
];

const TeamSection = () => {
  return <section className="w-full py-[5rem] bg-[#F4F0EC]">
    <h2 className='text-center'>Our Team</h2>
    <div className='grid grid-cols-1 max-w-6xl mt-[2rem] mx-auto gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {
            members.map((member, index) => (
                <TeamMemberCard member={member} key={index} />
            ))
        }
    </div>
  </section>;
}

export default TeamSection
