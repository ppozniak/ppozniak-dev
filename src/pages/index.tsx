import Head from "next/head";
import { About } from "src/components/sections/about";
import { Contact } from "src/components/sections/contact";
import { Footer } from "src/components/sections/footer";
import { Hero } from "src/components/sections/hero";
import { Skills } from "src/components/sections/skills";

// @TODO: Check contrasts!
// @TODO: OG and descriptions

export default function Home() {
  return (
    <>
      <Head>
        <title>ppozniak.dev</title>
      </Head>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
