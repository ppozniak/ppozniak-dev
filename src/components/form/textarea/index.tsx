import { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";

interface IProps extends ComponentPropsWithoutRef<"textarea"> {}

export const TextArea = ({ className, children, ...rest }: IProps) => (
  <textarea className={clsx("input", className)} {...rest}>
    {children}
  </textarea>
);
