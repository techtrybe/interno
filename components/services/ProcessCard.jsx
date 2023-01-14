import React from 'react'

const ProcessCard = ({process, index}) => {
    const classN = `flex flex-col ${
      index % 2 > 0 ? "md:flex-row" : "md:flex-row-reverse"
    } items-center gap-4 md-gap-[2rem] justify-between`;
  return (
    <article className={classN}>
      <div className="grid grid-cols-1 gap-3 w-full max-w-md">
        <div className="flex items-center justify-between">
          <img src={process.icon} alt={process.name} />
          <h2 className="text-[80px] text-white font-bold">{process.id}</h2>
        </div>
        <div>
          <h2>{process.name}</h2>
          <p className='text-secondary'>
            It is a long established fact will be distracted. Lorem Ipsum is
            simply dummy from text of the and typesetting indufstry.{" "}
          </p>
        </div>
      </div>
      <div className="w-full max-w-md">
        <img src={process.image} alt={process.name} />
      </div>
    </article>
  );
}

export default ProcessCard
