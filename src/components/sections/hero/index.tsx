import Link from "next/link";
import { Button } from "src/components/button";
import { Container } from "src/components/container";
import { StaticNav } from "src/components/nav";

export const Hero = () => {
  return (
    <section className="md:min-h-screen bg-black bg-hero bg-fixed bg-no-repeat text-white">
      <StaticNav />
      <Container className="flex flex-col pt-10 md:flex-row md:justify-between xl:pt-32">
        {/* Left column */}
        <div className="space-y-16 md:pl-4">
          {/* Intro */}
          <div className="space-y-8 leading-none">
            <p className="text-2xl md:text-3xl">Hello there!</p>

            <h1>
              <p className="opacity-90">My name is</p>
              <span className="max-w-sm text-xl font-bold md:text-3xl">
                <span className="text-primary">Patryk</span> Pozniak
              </span>
            </h1>

            <div>
              <p className="opacity-90">and I am a</p>
              <p className="mt-1 text-lg lg:text-xl">
                Experienced <strong className="bold">Frontend Developer</strong>{" "}
                with <br />
                <span className="underline">Full-Stack</span> Expertise
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 md:flex-row">
            <Button as={Link} href={"#contact"}>
              Contact me
            </Button>
            <Button as={Link} href={"#skills"} theme="secondary">
              View skills
            </Button>
          </div>
        </div>
        {/* @TODO: What about images on mobile? */}
        <div className="hidden md:block">{/* @TODO: Add images */}</div>
      </Container>
      {/* @TODO: Add wavy border */}
    </section>
  );
};
