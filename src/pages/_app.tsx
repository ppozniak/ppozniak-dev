import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Ubuntu_Mono, Montserrat } from "next/font/google";
import clsx from "clsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div
        className={clsx(montserrat.variable, ubuntuMono.variable, "font-sans")}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
