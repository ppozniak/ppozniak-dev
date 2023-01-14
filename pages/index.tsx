import Head from "next/head";
import { About } from "../components/sections/about";
import { Blog } from "../components/sections/blog";
import { Contact } from "../components/sections/contact";
import { Hero } from "../components/sections/hero";
import { Skills } from "../components/sections/skills";

// @TODO: Absolute imports
// @TODO: Section paddings normalized and reusable
// @TODO: Section heading component

export default function Home() {
  return (
    <>
      <Head>
        <title>ppozniak.dev</title>
      </Head>
      <Hero />
      <About />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}
