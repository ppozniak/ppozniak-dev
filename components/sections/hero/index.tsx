import { Button } from "components/button";
import { Container } from "components/container";

export const Hero = () => {
  return (
    <section className="bg-black bg-hero min-h-screen text-white bg-fixed bg-no-repeat">
      <Container className="flex flex-col md:flex-row md:justify-between pt-24">
        {/* Left column */}
        <div className="space-y-16 md:pl-4">
          {/* Intro */}
          <div className="space-y-8 leading-none">
            <p className="text-4xl md:text-5xl">Hello there!</p>

            <h1 className="">
              <p className="">My name is</p>
              <span className="font-bold max-w-sm text-3xl md:text-4xl">
                <span className="text-primary">Patryk</span> Pozniak
              </span>
            </h1>

            <div>
              <p>and I am a</p>
              <p className="font-mono max-w-sm text-4xl md:text-5xl">
                <span className="font-bold">Fullstack </span>
                <span className="underline">engineer</span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* @TODO: This should probably be a link */}
            <Button>Lorem ipsum</Button>
            <Button theme="secondary">Lorem ipsum</Button>
          </div>
        </div>
        {/* @TODO: What about images on mobile? */}
        <div className="hidden md:block">{/* @TODO: Add images */}</div>
      </Container>
      {/* @TODO: Add wavy border */}
    </section>
  );
};
