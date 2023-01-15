import { Button } from "components/button";
import { Container } from "components/container";
import { SectionHeading } from "components/section-heading";

export const Skills = () => {
  return (
    // @TODO: Add background image
    <section className="bg-yellow text-black">
      <Container>
        <header className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <SectionHeading
            className="lg:flex-shrink-0"
            heading="Skills and experiences"
          />
          {/* @TODO: Cloud words description */}
          {/* <p className="text-sm">
            <strong>Skilled at:</strong> HTML, CSS, JavaScript, Next.js,
            Typescript, React, accessibility, RWD, SASS, GraphQL, Node.js,
            Tailwind, single page applications, unit testing, task runners and
            build tools.
          </p> */}
        </header>
        {/* @TODO: Build skills cloud */}
        <p className="max-w-2xl">
          <strong>Skilled at:</strong> HTML, CSS, JavaScript, Next.js,
          Typescript, React, accessibility, RWD, SASS, GraphQL, Node.js,
          Tailwind, single page applications, unit testing, task runners and
          build tools.
        </p>

        <footer className="flex justify-end items-center gap-x-4 text-sm mt-4">
          {/* @TODO: A link */}
          ...to view job history
          <Button className="max-w-[200px]">Visit LinkedIn</Button>
          {/* @TODO: Add CV */}
        </footer>
      </Container>
    </section>
  );
};
