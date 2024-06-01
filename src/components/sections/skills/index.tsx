import { Button } from "src/components/button";
import { Container } from "src/components/container";
import { SectionHeading } from "src/components/section-heading";

export const Skills = () => {
  return (
    // @TODO: Add background image
    <section className="bg-yellow text-black">
      <Container>
        <header className="mb-8 flex flex-col items-center gap-8 md:flex-row">
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

        <footer className="mt-4 flex items-center justify-end gap-x-4 text-sm">
          {/* @TODO: A link */}
          ...to view job history
          <Button className="max-w-[200px]">Visit LinkedIn</Button>
          {/* @TODO: Add CV */}
        </footer>
      </Container>
    </section>
  );
};
