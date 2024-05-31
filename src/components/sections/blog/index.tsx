import { Button } from "src/components/button";
import { Container } from "src/components/container";
import { SectionHeading } from "src/components/section-heading";

export const Blog = () => {
  return (
    <section className="bg-black text-white text-center">
      <Container>
        <div className="">
          <header className="space-y-4">
            <SectionHeading heading="Blog posts" />
            <p className="text-sm max-w-5xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              vitae ab, fugiat quisquam exercitationem, natus suscipit sint,
              animi totam ipsam tempora atque possimus voluptates.
            </p>
          </header>

          <div className="h-96">{/* @TODO: Articles here */}</div>
        </div>

        <footer className="flex justify-end items-center gap-x-4 text-sm">
          ....lorem ipsum dolor sit amet{" "}
          <Button className="max-w-[200px]">View all</Button>
        </footer>
      </Container>
    </section>
  );
};
