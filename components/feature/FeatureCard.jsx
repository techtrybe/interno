import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const FeatureCard = ({feature}) => {
  return (
    <article className="rounded-[18px] flex flex-col hover:bg-[#F4F0EC] transition p-4 items-start md:items-center gap-5 w-[90%] mx-auto">
      <h3 className="text-[#292F36]">{feature.title}</h3>
      <p className="text-secondary md:text-center">{feature.description}</p>
      <Link href={"#"} className="flex items-center gap-2">
        <span className="text-[#4D5053]">Read More</span>
        <FaArrowRight className="text-primary" />
      </Link>
    </article>
  );
}

export default FeatureCard
