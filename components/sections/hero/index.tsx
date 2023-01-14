import { Button } from "components/button";
import { Container } from "components/container";

export const Hero = () => {
  return (
    <section className="bg-black min-h-screen text-white">
      <Container className="flex flex-col md:flex-row md:justify-between pt-24">
        <div className="">
          <div className="mb-12 md:mb-24">
            <p className="text-3xl">Hello there!</p>

            <h1 className="text-2xl mb-6">
              I am{" "}
              <span className="font-bold md:text-4xl">
                <span className="text-primary">Patryk</span> Pozniak
              </span>
              , the
            </h1>

            <p className="font-mono text-4xl md:text-5xl max-w-sm">
              <span className="font-bold">Fullstack </span>
              <span className="underline">engineer</span>
            </p>
          </div>

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
