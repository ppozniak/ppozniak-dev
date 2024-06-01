import clsx from "clsx";
import { Metadata } from "next";
import { Ubuntu_Mono, Montserrat } from "next/font/google";

import "../styles/globals.css";

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

export const metadata: Metadata = {
  title: "ppozniak.dev",
  description:
    "Ownership-driven developer with over 8 years of full-stack development experience. Committed to mastering diverse technologies as a generalist to adapt quickly to evolving tech world. Passionate about mentoring, knowledge sharing, and collaborative practices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-gb"
      className={clsx(
        montserrat.variable,
        ubuntuMono.variable,
        "font-sans scroll-smooth",
      )}
    >
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
