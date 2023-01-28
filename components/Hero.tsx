import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundStars from "./BackgroundStars";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  //console.log(pageInfo);
  const [text, count] = useTypewriter({
    words: [
      "What's up? I'm Dese!",
      "A girl who loves to smile and code",
      "but loves to make you smile with my code even more :)",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen space-y-8 items-center justify-center text-center overflow-hidden relative">
      <BackgroundStars />
      {/* <Image 
            src={"https://i.pinimg.com/564x/8e/6f/c8/8e6fc8d13af0fcaac52e7a76890819b1.jpg"}
            layout="fill"
            objectFit="cover"
            {urlFor(pageInfo?.heroImage).url()}
            height="128px"
            width="128px"
            alt='Picture of Dese Elumaro'
            className='relative rounded-full mx-auto h-32 w-32'
        /> */}
      <div className="w-32 h-32 mx-auto object-cover absolute top-64 left-0 right-0">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt=""
          objectFit="cover"
          layout="fill"
          className="rounded-full"
        />
      </div>

      <div className="absolute top-96 left-0 right-0 text-center pt-3">
        <h2 className="text-xs md:text-sm uppercase text-purple-9 pb-2 tracking-[10px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-purple-8 text-2xl md:text-4xl">
          <span>{text}</span>
          <Cursor cursorColor="#A98AAB" />
        </h1>

        <div className="hidden md:flex justify-center items-center mx-auto pt-3 text-purple-9">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
          {/* <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link> */}
          <Link href="ELUMARO_RESUME.pdf">
            <a target="_blank">
              <button className="heroBtn">Resume</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
