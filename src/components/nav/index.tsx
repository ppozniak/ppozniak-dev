"use client";

import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Logo } from "src/components/logo";

// @TODO: Make it fixed? Or create a separate nav for that
export const StaticNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className="border-b border-pastel border-opacity-30 bg-pastel bg-opacity-10 py-4 shadow-xl">
      <div className="container">
        <nav className="flex items-center justify-between md:justify-start">
          <div className="mr-8">
            <Logo variation="inline" />
          </div>
          {/* @TODO: Finish this */}
          <button className="hidden flex-shrink-0 basis-12" onClick={toggle}>
            <Bars3Icon className="text-white" />
            {isOpen && "open"}
          </button>
          <ul
            className={clsx(
              "items-center md:flex",
              isOpen ? "flex" : "hidden",
              // "fixed top-0 right-0 left-0 flex-col pointer-events-none"
            )}
          >
            {[1, 2, 3, 4].map((number) => (
              <li key={number} className="grow">
                <a
                  href={"#" + number.toString()}
                  className="grow px-8 py-4 font-bold transition-opacity hover:opacity-70 lg:px-12"
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
