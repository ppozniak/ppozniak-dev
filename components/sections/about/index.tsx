import { Container } from "components/container";

export const About = () => {
  return (
    <section className="bg-white text-black">
      <Container className="flex flex-col md:flex-row justify-between">
        <div className="basis-1/2 space-y-4">
          <h2 className="text-3xl">
            <span className="font-bold">About</span>{" "}
            <span className="underline">me</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            vitae ab, fugiat quisquam exercitationem, natus suscipit sint, animi
            totam ipsam tempora atque possimus voluptates odio assumenda
            inventore! Distinctio ad amet nostrum, doloremque quod reprehenderit
            provident aliquid et nihil qui nisi rem sit animi aperiam,
            laudantium obcaecati vel non, necessitatibus illo.
          </p>
          <p>
            Libero voluptatibus similique rem perspiciatis dolorem ipsa! Eos,
            quis, neque aspernatur, dolorem qui ipsum nesciunt voluptatibus
            temporibus perspiciatis tempore amet! Eligendi, aperiam doloremque.
            Eum nulla dolor similique excepturi perspiciatis? Veritatis
            doloremque labore provident! Dicta earum harum fugiat quas a,
            ratione corrupti odio, alias cum itaque rem, saepe officiis ullam
            quibusdam.
          </p>
        </div>
        <div className="basis-1/2">{/* @TODO: Add image here */}</div>
      </Container>
    </section>
  );
};
