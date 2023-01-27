import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface IProps extends ComponentPropsWithoutRef<"h2"> {
  heading: string;
}

export const SectionHeading = ({ className, heading }: IProps) => (
  <h2 className={clsx("text-xl ", className)}>
    {heading.split(" ").map((word, index) => (
      <span
        className="first-of-type:font-bold last-of-type:underline"
        key={word + index}
      >
        {word}{" "}
      </span>
    ))}
  </h2>
);
