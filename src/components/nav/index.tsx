import { Logo } from "src/components/logo";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import clsx from "clsx";

// @TODO: Make it fixed? Or create a separate nav for that
export const StaticNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className="py-4 border-b border-opacity-30 border-pastel bg-pastel bg-opacity-10 shadow-xl">
      <div className="container">
        <nav className="flex justify-between items-center md:justify-start">
          <div className="mr-8">
            <Logo variation="inline" />
          </div>
          {/* @TODO: Finish this */}
          <button className="hidden basis-12 flex-shrink-0" onClick={toggle}>
            <Bars3Icon className="text-white" />
            {isOpen && "open"}
          </button>
          <ul
            className={clsx(
              "items-center md:flex",
              isOpen ? "flex" : "hidden"
              // "fixed top-0 right-0 left-0 flex-col pointer-events-none"
            )}
          >
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
};
