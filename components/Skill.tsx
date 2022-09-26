import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
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
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        className="w-12 h-12 md:h-16 md:w-16 rounded-full object-cover object-center border border-purple-5 p-2 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 md:h-16 md:w-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
