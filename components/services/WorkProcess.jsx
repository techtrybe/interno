import ProcessCard from "./ProcessCard";

const WORKPROCESS_ARR = [
    {
        id: "01",
        name: "Concept & Details",
        icon: "/assets/process/icon-01.png",
        image: "/assets/process/01.png"
    },
    {
        id: "02",
        name: "Idea for Work",
        icon: "/assets/process/icon-02.png",
        image: "/assets/process/02.png"
    },
    {
        id: "03",
        name: "Design",
        icon: "/assets/process/icon-03.png",
        image: "/assets/process/01.png"
    },
    {
        id: "04",
        name: "Perfection",
        icon: "/assets/process/icon-04.png",
        image: "/assets/process/02.png"
    },
]

const WorkProcess = () => {
  return (
    <section className="bg-lightGray rounded-[70px] py-[100px] px-8">
      <div className="flex flex-col items-center gap-2">
        <h2>How We Work</h2>
        <p className='text-secondary text-center max-w-lg'>
          It is a long established fact will be distracted.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[3rem] mt-[3rem]">
        {
            WORKPROCESS_ARR.map((process, index) => (
                <ProcessCard key={process.id} index={index} process={process} />
            ))
        }
      </div>
    </section>
  );
}

export default WorkProcess
