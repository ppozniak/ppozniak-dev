import { Container } from "src/components/container";
import { Logo } from "src/components/logo";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <Container className="flex flex-col items-end justify-between gap-4 md:flex-row">
        <div className="basis-1/2">
          <p>Thank you for visiting my website.</p>
          <p>Have a good day :)</p>
          {/* <p>
            Background photos provided by lorem ipsum Lorem photos provided by
            lorem ipsumPhotos provided by lorem ipsum Vectaary etc.
          </p> */}
        </div>
        <div className="basis-1/2 text-right">
          <Logo variation="inline" />
          {/* @TODO: Dynamic year */}
          <div className="mt-2 font-mono">
            built with 🖐 and 🧠 | Copyright {year}
          </div>
        </div>
      </Container>
    </footer>
  );
};
