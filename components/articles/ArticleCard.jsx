import { ChevronRightIcon } from "@heroicons/react/24/solid";


function ArticleCard({article}) {
  return (
    <article className=" bg-white group hover:bg-[#F4F0EC] py-6 p-5 rounded-[40px] border border-[#E7E7E7] flex flex-col gap-6">
      <div className="rounded-t-[40px] relative overflow-hidden w-full">
        <img src={article.image} alt={article.tag} />
        <div className="absolute bottom-4 left-4 bg-white rounded-[8px] text-dark py-3 px-5 drop-shadow-md rounded-bl-none">{article.tag}</div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-normal text-dark text-[25px]">{article.title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-regular text-[#4D5053]">
            {article.date}
          </p>

          <button
            aria-label="read-article"
            className=" rounded-full relative transition bg-[#F4F0EC] p-3 flex items-center justify-center"
          >
            <ChevronRightIcon className="w-6 h-6 z-45 text-dark" />
            <div className="w-full inset-0 h-full bg-white flex items-center justify-center transition-all origin-center duration-300 scale-0 group-hover:scale-100 absolute rounded-full z-20">
              <ChevronRightIcon className="w-6 h-6 z-45 text-dark" />
            </div>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard
