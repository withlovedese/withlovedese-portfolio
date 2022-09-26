import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import NorthIcon from "@mui/icons-material/North";

const Home: NextPage = () => {
  return (
    <div className="text-purple-7 h-screen bg-purple-2 snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-purple-2 scrollbar-thumb-purple-9/50">
      <Head>
        <title>Adesemi Chloe Elumaro</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="contact" className="snap-end">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center flex-col">
            <NorthIcon className="animate-bounce text-purple-9" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
