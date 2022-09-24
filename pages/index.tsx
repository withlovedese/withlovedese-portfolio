import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="text-purple-7 h-screen bg-purple-2 snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Adesemi Chloe Elumaro</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about"></section>
      <section id="skills"></section>
      <section id="projects"></section>
      <section id="experience"></section>
      <section id="contact"></section>
    </div>
  );
};

export default Home;
