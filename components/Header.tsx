import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="flex items-start justify-between sticky top-0 max-w-7xl mx-auto z-10 md:items-center">
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#d7ccf0"
            bgColor="transparent"
          />
        ))}
        <SocialIcon
          url="https://www.linkedin.com/in/adesemicelumaro/"
          fgColor="#d7ccf0"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/withlovedese"
          fgColor="#d7ccf0"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCmuTrRe2fdD81PWsWF5I58Q"
          fgColor="#d7ccf0"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/withlovedese"
          fgColor="#d7ccf0"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/withlovedese/"
          fgColor="#d7ccf0"
          bgColor="transparent"
        />
      </motion.div>

      {/* Contact me  */}
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex items-center text-sm font-semibold text-purple-7 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#d7ccf0"
            bgColor="transparent"
          />
          <p className="hidden md:inline-flex">Hit me up!</p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
