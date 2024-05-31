import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface IProps extends ComponentPropsWithoutRef<"label"> {}

export const Label = ({ className, children, ...rest }: IProps) => (
  <label className={clsx("font-bold", className)} {...rest}>
    {children}
  </label>
);
