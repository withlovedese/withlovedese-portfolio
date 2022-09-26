import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="text-purple-7 h-screen bg-purple-2 snap-y snap-mandatory z-0 overflow-x-hidden">
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

      <Footer />
    </div>
  );
};

export default Home;
