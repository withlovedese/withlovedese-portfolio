import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1 }}
      className="group relative flex cursor-pointer"
    >
      <div className="w-12 h-12 md:h-16 md:w-16 rounded-full object-cover object-center border border-purple-5 p-2 filter group-hover:grayscale transition duration-300 ease-in-out">
        <Image
          alt={skill?.title}
          layout="fill"
          objectFit="contain"
          src={urlFor(skill?.image).url()}
          className="rounded-full"
        />
      </div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 md:h-16 md:w-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
