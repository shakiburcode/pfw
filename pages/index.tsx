import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Md. Shakibur Rahman — Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Md. Shakibur Rahman — Full-Stack Developer, Mobile App Developer & CS Graduate from North South University Bangladesh." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Md. Shakibur Rahman — Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer & CS Graduate. Building modern web and mobile apps with Next.js, React, Flutter and more." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
