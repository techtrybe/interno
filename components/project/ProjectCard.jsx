import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="flex flex-col gap-4 group">
      <img src={project.image} alt={project.name} />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-normal text-dark">{project.name}</h3>
          <p className="font-thin">{project.type}</p>
        </div>

        <button
          aria-label="view-project"
          className=" rounded-full relative transition bg-[#F4F0EC] p-3 flex items-center justify-center"
        >
          <ChevronRightIcon className="w-8 h-8 z-45" />
          <div className="w-full inset-0 h-full bg-primary flex items-center justify-center transition-all origin-center duration-300 scale-0 group-hover:scale-100 absolute rounded-full z-20">
            <ChevronRightIcon className="w-8 h-8 z-45" />
          </div>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
