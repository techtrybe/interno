import ProjectCard from "./ProjectCard";

const PROJECTS_ARR = [
    {
        name: "Modern Kitchen",
        type: "Decor/Architecture",
        image: "/assets/projects/01.png"
    },
    {
        name: "Creative Workplace",
        type: "Design",
        image: "/assets/projects/02.png"
    },
    {
        name: "Light Ambience",
        type: "Modern",
        image: "/assets/projects/03.png"
    },
    {
        name: "Bedroom Kitchen",
        type: "Architecture",
        image: "/assets/projects/04.png"
    },
]

function ProjectSection() {
  return (
    <section className='py-10'>
        <Heading />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {PROJECTS_ARR.map((project, index) => (
                <ProjectCard project={project} key={index} />
            ))}
        </div>
    </section>
  )
}

function Heading() {
    return (
      <div className="flex flex-col items-center gap-4 justify-center w-full p-4">
        <h2 className="font-normal text-[30px] md:text-[50px] text-dark">
          Recent Projects
        </h2>
        <p className="text-center text-[#4D5053] text-[20px] max-w-3xl">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
    );
}

export default ProjectSection
