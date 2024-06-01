import { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";

interface IProps extends ComponentPropsWithoutRef<"input"> {}

export const Input = ({ className, ...rest }: IProps) => (
  <input className={clsx("input", className)} {...rest} />
);
