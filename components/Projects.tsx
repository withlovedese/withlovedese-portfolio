import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

type Props = {};

const Projects = (props: Props) => {
  const projects = ["hi", "hello", "hihi", "howdy"];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row justify-evenly mx-auto items-center max-w-full h-screen"
    >
      <h3 className="absolute top-20 tracking-[20px] uppercase text-purple-9 font-extrabold">
        Projects
      </h3>
      <div className="w-full absolute top-[25%] bg-purple-3/20 left-0 h-[500px] -skew-y-12"></div>
      <div className="scrollbar-thin relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-purple-2 scrollbar-thumb-purple-9/50">
        {projects.map((project) => (
          <Project />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
