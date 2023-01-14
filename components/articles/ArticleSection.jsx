import React from 'react'
import ArticleCard from './ArticleCard';


const ARTICLES_ARR = [
  {
    title: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022 ",
    tag: "Kitchen Design",
    image: "/assets/articles/1.png",
  },
  {
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December,2022 ",
    tag: "Living Design",
    image: "/assets/articles/2.png",
  },
  {
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
    tag: "Interior Design",
    image: "/assets/articles/3.png",
  },
  {
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December,2022 ",
    tag: "Living Design",
    image: "/assets/articles/2.png",
  },

  {
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
    tag: "Interior Design",
    image: "/assets/articles/3.png",
  },
  {
    title: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022 ",
    tag: "Kitchen Design",
    image: "/assets/articles/1.png",
  },
];

function ArticleSection() {
  return (
    <section className='py-10'>
        <div className='flex flex-col gap-4'>
            <Heading />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-[1rem] lg:grid-cols-3'>
                {
                    ARTICLES_ARR.map((article, index) => (
                        <ArticleCard article={article} key={index} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

function Heading() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full p-4">
      <h2 className="font-normal text-[30px] md:text-[50px] text-dark">
        Articles & News
      </h2>
      <p className="text-center text-[#4D5053] text-[20px] max-w-3xl">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when looking at its layouts the points of
        using.
      </p>
    </div>
  );
}

export default ArticleSection
