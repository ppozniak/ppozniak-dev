import { Container } from "components/container";
import { Logo } from "components/logo";

// @TODO: Determine mobile version
export const StaticNav = () => (
  <Container>
    <nav className="flex">
      <div className="mr-8">
        <Logo />
      </div>
      <ul className="flex items-center gap-11">
        {[1, 2, 3, 4].map((number) => (
          <li key={number}>
            <a
              href={"#" + number.toString()}
              className="px-16 py-4 font-bold hover:opacity-70 transition-opacity"
            >
              Item
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </Container>
);
