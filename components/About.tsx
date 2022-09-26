import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 tracking-[20px] uppercase text-purple-9 font-extrabold">
        About
      </h3>

      <div className="absolute top-40 flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.3,
          }}
          src={urlFor(pageInfo?.profilePic).url()}
          alt="Dese in the snow!"
          className="mb-6 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 lg:w-[400px] lg:h-[500px]"
        />

        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="space-y-10 px-0 md:px-10"
        >
          <h4 className="md:text-3xl text-xl">
            Hihi! My name is Adesemi "Dese" Chloe Elumaro
          </h4>
          <p className="md:leading-7 text-xs md:text-lg">
            {pageInfo?.backgroundInformation}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
