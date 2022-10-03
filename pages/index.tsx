import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import NorthIcon from "@mui/icons-material/North";
import { Social, Experience, PageInfo, Project, Skill } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  //console.log(socials);
  return (
    <div className="text-purple-7 h-screen bg-purple-2 snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-purple-2 scrollbar-thumb-purple-9/50 md:scrollbar">
      <Head>
        <title>Adesemi Chloe Elumaro</title>
        <meta
          property="og:title"
          content="Adesemi Elumaro | Software Engineer"
        />
        <meta property="og:description" content="Weeb extraordinaire" />
        <meta property="og:image" content={urlFor(pageInfo?.heroImage).url()} />
        <meta
          property="og:url"
          content="https://withlovedese-portfolio-withlovedese.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Adesemi Elumaro | Software Developer"
        />
        <meta name="twitter:description" content="Weeb extraordinaire" />
        <meta
          name="twitter:image"
          content={urlFor(pageInfo?.heroImage).url()}
        />
        <meta
          name="description"
          content="I'm a junior at Duke University who's really excited about learning! Get in touch to know more!"
        />
        <meta charSet="utf-8" />
        <meta
          name="keyword"
          content="portfolio, javascript, developer, adesemi, elumaro, react, nextjs"
        ></meta>
        <link
          rel="shortcut icon"
          href="./public/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
        />
      </Head>

      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="skills" className="snap-start hidden md:block">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      {/* <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section> */}
      <section id="contact" className="snap-end">
        <Contact pageInfo={pageInfo} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  //sconsole.log(pageInfo);

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
