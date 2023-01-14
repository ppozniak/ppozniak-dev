import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Ubuntu, Ubuntu_Mono } from "@next/font/google";
import clsx from "clsx";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={clsx(ubuntu.variable, ubuntuMono.variable, "font-sans")}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
