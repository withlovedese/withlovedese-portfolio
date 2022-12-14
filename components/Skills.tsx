import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as sk } from "../typings";

type Props = {
  skills: sk[];
};

const Skills = ({ skills }: Props) => {
  //console.log(skills);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row justify-center mx-auto items-center max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0"
    >
      <h3 className="absolute top-20 tracking-[20px] uppercase text-purple-9 font-extrabold">
        Skills
      </h3>

      <div className="absolute top-36 flex flex-col justify-center items-center">
        <h3 className="uppercase text-purple-6 text-center max-w-max text-sm tracking-[3px]">
          Hover over a skill for current proficiency
        </h3>

        <div className="grid grid-cols-4 gap-5 mt-7">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
