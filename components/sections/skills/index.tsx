import { Container } from "components/container";
import { SectionHeading } from "components/section-heading";

export const Skills = () => {
  return (
    // @TODO: Add background image
    <section className="bg-yellow text-black min-h-screen">
      <Container>
        <header className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <SectionHeading
            className="lg:flex-shrink-0"
            heading="Skills and experiences"
          />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            vitae ab, fugiat quisquam exercitationem, natus suscipit sint, animi
            totam ipsam tempora atque possimus.
          </p>
        </header>
        <p>
          My skills Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          ad voluptatem, minus nobis quaerat possimus nesciunt aperiam dicta
          cumque veritatis aliquam dolor deserunt voluptas aliquid nam sed quae!
          Facere soluta, est vel et suscipit deserunt itaque rerum eius libero
          aliquid mollitia nulla dolorem nostrum quia nemo, cumque at ullam
          quaerat aut laboriosam. Praesentium, dolorum quod. Iste dignissimos
          minima dicta eveniet rerum, impedit maiores velit a eligendi magnam ab
          iusto! Possimus fugit necessitatibus omnis fuga quis porro iusto
          aspernatur, veritatis accusamus optio dolorum corporis culpa
          repudiandae reiciendis nemo cupiditate, laudantium ea eaque nobis
          quisquam consequuntur saepe tempora quod hic? Dolorum, corporis?
        </p>
      </Container>
    </section>
  );
};
