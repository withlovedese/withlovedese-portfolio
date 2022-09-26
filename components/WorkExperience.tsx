import React from "react";
import ExperienceCard from "./ExperienceCard";
type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 items-center mx-auto justify-evenly">
      <h3 className="absolute top-20 tracking-[20px] uppercase text-purple-9 font-extrabold text-center">
        Experience
      </h3>

      <div className="flex absolute top-32 w-full space-x-5 overflow-x-auto p-10 snap-mandatory snap-x bottom-5 scrollbar-thin scrollbar-track-purple-2 scrollbar-thumb-purple-9/50">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default WorkExperience;
