import React from 'react'

const STATS_ARR = [
    {
        name: "Years of Experience",
        value: 12
    },
    {
        name: "Completed Projects",
        value: 85
    },
    {
        name: "Active Projects",
        value: 15
    },
    {
        name: "Happy Customers",
        value: 95
    },
]

function Stats() {
  return (
    <section className="py-[2rem] px-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS_ARR.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 justify-center"
          >
            <h3 className="text-primary text-display font-normal">{stat.value}</h3>
            <p className="text-[#4D5053] text-center text-lg">{stat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats
