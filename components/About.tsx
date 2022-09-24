import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 tracking-[30px] uppercase text-purple-9 font-extrabold">
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
          viewport={{ once: true }}
          src="https://i.pinimg.com/564x/8a/73/bf/8a73bf27729f525f887d8c3e34026d3c.jpg"
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
            duration: 1.3,
          }}
          viewport={{ once: true }}
          className="space-y-10 px-0 md:px-10"
        >
          <h4 className="md:text-3xl text-xl">
            Hihi! My name is Adesemi "Dese" Chloe Elumaro
          </h4>
          <p className="md:leading-7 text-xs md:text-lg">
            I am a junior at Duke University, NC studying Computer Science with
            a minor in Economics. I am really interested in exploring how the
            intersection of education, finance/economics, and technology can
            help under-developing countries have a larger part of the global
            economy! I recognize I am still relatively young and have a lot to
            learn so I am always really excited about meeting new people who
            share my interests and gaining knowledge by exploring different
            product-driven full-stack development projects in the aforementioned
            fields. I LOVE creating projects that have an impact on at least one
            person. In my freetime, I run a web design studio called MagnACE,
            make Youtube videos, indulge in the bible, read books of various
            genres, watch anime, and play games!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
