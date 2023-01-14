import Head from "next/head";
import { About } from "../components/sections/about";
import { Hero } from "../components/sections/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>ppozniak.dev</title>
      </Head>
      <Hero />
      <About />
    </>
  );
}
