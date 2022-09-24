import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 tracking-[30px] uppercase text-purple-9 font-extrabold">
        About
      </h3>

      <motion.img
        initial={{
          y: -200,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 2.5,
        }}
        src="https://i.pinimg.com/564x/8a/73/bf/8a73bf27729f525f887d8c3e34026d3c.jpg"
        alt="Dese in the snow!"
      />
    </div>
  );
};

export default About;
