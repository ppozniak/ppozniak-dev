import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface IProps extends ComponentPropsWithoutRef<"input"> {}

export const Input = ({ className, ...rest }: IProps) => (
  <input className={clsx("input", className)} {...rest} />
);
