import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  //console.log(experience.technologies);
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[600px] md:w-[700px] xl:w-[900px] snap-center bg-purple-1 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 max-w-screen overflow-y-auto scrollbar-thin scrollbar-track-purple-1 scrollbar-thumb-purple-9/50">
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
          {new Date(experience.dateStarted).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
          })}{" "}
          to{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
              })}
        </p>
        <div className="flex space-x-2 my-2 mb-3">
          {experience.technologies.map((tech) => (
            <div className="h-7 w-7 rounded-full">
              <Image
                src={urlFor(tech?.image).url()}
                alt={tech.title}
                className="rounded-full"
                key={tech._id}
                objectFit="contain"
                layout="fill"
              />
              <img
                src={urlFor(tech?.image).url()}
                alt={tech.title}
                className="h-7 w-7 rounded-full"
                key={tech._id}
              />
            </div>
          ))}
        </div>
        <ul className="list-disc space-y-2 ml-5 h-fit text-sm">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
