import { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";

interface IProps extends ComponentPropsWithoutRef<"label"> {}

export const Label = ({ className, children, ...rest }: IProps) => (
  <label className={clsx("font-bold", className)} {...rest}>
    {children}
  </label>
);
