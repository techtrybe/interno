import React from 'react'
import FeatureCard from './FeatureCard'


const FEATURES = [
    {
        title: "Project Plan",
        description: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Interior Work",
        description: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
        title: "Realization",
        description: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
]

const FeatureSection = () => {
  return (
    <section className="w-full py-14">
      <div className="max-w-6xl mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {FEATURES.map((feature, index) => (
            <FeatureCard feature={feature} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection
