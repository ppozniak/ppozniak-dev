import { ComponentPropsWithoutRef, ReactNode } from "react";

import clsx from "clsx";

type ButtonTheme = "primary" | "secondary";
interface IProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  theme?: ButtonTheme;
}

const themeClassName: Record<ButtonTheme, string> = {
  primary: "bg-primary text-white hover:bg-primary-100",
  secondary: "bg-white text-black hover:bg-grey",
};

export const Button = ({
  children,
  className,
  theme = "primary",
  type = "button",
  ...rest
}: IProps) => (
  <button
    {...rest}
    type={type}
    className={clsx(
      "max-w-xs flex-grow rounded-3xl px-4 py-3 font-semibold",
      "transition-colors",
      themeClassName[theme],
      className,
    )}
  >
    {children}
  </button>
);
