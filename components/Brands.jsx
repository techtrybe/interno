import React from 'react'

const COMPANIES_ARR = [
    {
        name: "Modern Home",
        url: "/assets/01.svg"
    },
    {
        name: "Style Vintage Interior",
        url: "/assets/02.svg"
    },
    {
        name: "Brand",
        url: "/assets/03.svg"
    },
    {
        name: "Nature Home",
        url: "/assets/04.svg"
    },
    {
        name: "Classic Design Studio",
        url: "/assets/05.svg"
    },
]

const Brands = () => {
  return (
    <section className='py-10'>
        <div className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-[50px] md:gap-[100px] mx-auto'>
            {
                COMPANIES_ARR.map((company, index) => (
                    <div key={index}>
                        <img src={company.url} width="110" alt={company.name} />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Brands
