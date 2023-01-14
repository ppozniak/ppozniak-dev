import { Container } from "components/container";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="basis-1/2">
          <p>
            Thank you for visiting my website.
            <br />
            Please don&apos;t check the console.
          </p>
          <p>
            Background photos provided by lorem ipsum Lorem photos provided by
            lorem ipsumPhotos provided by lorem ipsum Vectaary etc.
          </p>
        </div>
        <div className="text-right basis-1/2">
          {/* @TODO: Add logo */}
          Logo
          {/* @TODO: Dynamic year */}
          <div className="font-mono">built with 🖐 and 🧠 | Copyright 2023</div>
        </div>
      </Container>
    </footer>
  );
};
