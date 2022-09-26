import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  //console.log(experience.technologies);
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-purple-1 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 max-w-sm overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt="logo"
        className="w-32 h-32 rounded-full object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
        <p className="uppercase font-bold mt-1">{experience.company}</p>
        <p className="text-sm font-light mb-4">
          {experience.dateStarted} to {experience.dateEnded}
        </p>
        <div className="flex space-x-2 my-2 mb-3">
          {experience.technologies.map((tech) => (
            <img
              src={urlFor(tech?.image).url()}
              alt={tech.title}
              className="h-7 w-7 rounded-full"
            />
          ))}
        </div>
        <ul className="list-disc space-y-2 ml-5">
          {experience.points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
