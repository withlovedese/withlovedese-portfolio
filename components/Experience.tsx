import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 items-center mx-auto justify-evenly">
      <h3 className="absolute top-20 tracking-[20px] uppercase text-purple-9 font-extrabold text-center">
        Experience
      </h3>

      <div className="flex absolute top-32 w-full space-x-5 overflow-x-auto p-10 snap-mandatory snap-x bottom-5">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
