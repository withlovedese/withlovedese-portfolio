import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
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
        src="https://i.pinimg.com/564x/33/fa/78/33fa789a039dbd245629fa50a31c716a.jpg"
        alt="logo"
        className="w-32 h-32 rounded-full object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Job Title</h4>
        <p className="uppercase font-bold mt-1">Company name</p>
        <p className="text-sm font-light mb-4">Date to Date</p>
        <div className="flex space-x-2 my-2 mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
            className="h-7 w-7 rounded-full"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
            className="h-7 w-7 rounded-full"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
            className="h-7 w-7 rounded-full"
          />
        </div>
        <ul className="list-disc space-y-2 ml-5">
          <li>description here</li>
          <li>description here</li>
          <li>description here</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
