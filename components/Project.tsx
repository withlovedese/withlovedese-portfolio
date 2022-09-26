import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center p-20 space-y-5 h-screen">
      <motion.img
        initial={{
          opacity: 0,
          y: -200,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.1,
        }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/564x/33/fa/78/33fa789a039dbd245629fa50a31c716a.jpg"
        alt=""
        className="h-32 w-32 md:h-64 md:w-64"
      />

      <div className="space-y-5 max-w-6xl md:px-10 pb-5">
        <h3 className="font-semibold text-2xl text-center">Title</h3>
        <p className="md:text-left text-center max-h-32">
          some description some description some description some description
          some description some description some description some description
          some description some description some description some description
        </p>
      </div>
    </div>
  );
};

export default Project;
