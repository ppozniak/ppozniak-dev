import Image from "next/image";
import meme from "public/hacc.jpg";
import { Container } from "src/components/container";
import { SectionHeading } from "src/components/section-heading";

export const About = () => {
  return (
    <section className="bg-white text-black">
      <Container className="flex flex-col items-center justify-between md:flex-row lg:items-start">
        <div className="basis-1/2 space-y-4">
          <SectionHeading heading="About me" />
          <p>
            Committed and hard-working developer with over{" "}
            <strong>7 years</strong> of full stack professional experience.
            Programming since childhood.
          </p>
          <p>
            I&apos;m passionate about growth in both myself and through
            mentoring others. Keen proponent of code reviews, knowledge sharing
            and deepening my back end and architectural experience.
          </p>
          <p>
            Interested in Healtech (especially <strong>mental health</strong>)
            and education industries.
          </p>
        </div>
        <div className="basis-1/2 text-right">
          <figure className="ml-auto max-w-xl overflow-hidden p-4">
            <Image
              className="rounded-lg shadow-sm"
              src={meme}
              alt="A meme saying 'When you first learned HTML': 'hac' "
            />
            <figcaption className="mt-1 text-sm text-pastel">
              Actual representation
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
};
