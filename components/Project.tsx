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
        className="h-32 w-64 md:h-64 md:w-64 object-cover"
      />

      <div className="space-y-5 max-w-6xl md:px-10 pb-5">
        <h3 className="font-semibold text-2xl text-center">{project.title}</h3>
        <p className="md:text-left text-center max-h-32">{project.summary}</p>
      </div>
    </div>
  );
};

export default Project;
