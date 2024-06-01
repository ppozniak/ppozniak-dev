import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

// @TODO: Check contrasts!
// @TODO: OG and descriptions

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
