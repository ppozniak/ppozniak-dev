import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface IProps extends ComponentPropsWithoutRef<"textarea"> {}

export const TextArea = ({ className, children, ...rest }: IProps) => (
  <textarea className={clsx("input", className)} {...rest}>
    {children}
  </textarea>
);
