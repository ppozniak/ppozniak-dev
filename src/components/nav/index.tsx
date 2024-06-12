import Link from "next/link";
import { Logo } from "src/components/logo";

const SECTIONS = ["About", "Skills", "Contact"];

// @TODO: Make it fixed? Or create a separate nav for that
export const StaticNav = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className="border-b border-pastel border-opacity-30 bg-pastel bg-opacity-10 py-4 shadow-xl relative z-10">
      <div className="container">
        <nav className="flex items-center justify-between md:justify-start">
          <div className="mr-8">
            <Logo variation="inline" />
          </div>
          {/* @TODO: Finish mobile this */}
          {/* <button className="hidden flex-shrink-0 basis-12" onClick={toggle}>
            <Bars3Icon className="text-white" />
            {isOpen && "open"}
          </button> */}
          <ul className="items-center hidden md:flex">
            {SECTIONS.map((section) => (
              <li key={section} className="grow">
                <Link
                  href={`#${section.toLowerCase()}`}
                  className="grow px-8 py-4 font-bold transition-opacity hover:opacity-70 lg:px-12"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
