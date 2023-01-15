import { Logo } from "components/logo";
import { Bars3Icon } from "@heroicons/react/24/solid";

// @TODO: Make it fixed? Or create a separate nav for that
export const StaticNav = () => (
  <div className="py-4 border-b border-opacity-30 border-pastel bg-pastel bg-opacity-10 shadow-xl">
    <div className="container">
      <nav className="flex justify-between items-center md:justify-start">
        <div className="mr-8">
          <Logo variation="inline" />
        </div>
        <button className="md:hidden basis-12 flex-shrink-0">
          <Bars3Icon className="text-white" />
        </button>
        <ul className="items-center hidden md:flex">
          {[1, 2, 3, 4].map((number) => (
            <li key={number} className="grow">
              <a
                href={"#" + number.toString()}
                className="py-4 px-8 lg:px-12 grow font-bold hover:opacity-70 transition-opacity"
              >
                Item
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);
