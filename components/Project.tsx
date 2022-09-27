import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  project: Project;
};

const Project = ({ project }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center p-20 space-y-5 h-screen">
      <motion.img
        initial={{
          opacity: 0,
          y: -200,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.1,
        }}
        viewport={{ once: true }}
        src={urlFor(project?.image).url()}
        alt=""
        className="h-32 w-auto md:h-48 lg:h-64 object-cover"
      />

      <div className="space-y-5 max-w-6xl md:px-10 pb-5">
        <h3 className="font-semibold text-2xl text-center">{project.title}</h3>
        <div className="flex space-x-2 my-2 mb-3 items-center justify-center">
          {project.technologies.map((tech) => (
            <img
              src={urlFor(tech?.image).url()}
              alt={tech.title}
              className="h-7 w-7 rounded-full"
              key={tech._id}
            />
          ))}
        </div>
        <p className="md:text-left text-center max-h-32">{project.summary}</p>
      </div>
    </div>
  );
};

export default Project;
