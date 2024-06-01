import { Container } from "src/components/container";
import { SectionHeading } from "src/components/section-heading";

export const About = () => {
  return (
    <section className="bg-white text-black" id="about">
      <Container className="flex flex-col items-center justify-between md:flex-row lg:items-start">
        <div className="basis-1/2 space-y-4">
          <SectionHeading heading="About me" />
          <p>
            <strong>Ownership-driven</strong> developer with over 8 years of
            full-stack development experience. Committed to mastering diverse
            technologies as a generalist to adapt quickly to evolving tech
            world. Passionate about <strong>mentoring</strong>, knowledge
            sharing, and collaborative practices.
            {/* @TODO: Probably this can have a bit more */}
          </p>
        </div>
        <div className="basis-1/2 text-right">
          {/* @TODO: Something here */}
        </div>
      </Container>
    </section>
  );
};
