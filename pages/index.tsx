import Head from "next/head";
import { Hero } from "../components/sections/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>ppozniak.dev</title>
      </Head>
      <Hero />
    </>
  );
}
