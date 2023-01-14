import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type ButtonTheme = "primary" | "secondary";
interface IProps extends ComponentProps<"button"> {
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
      "rounded-3xl px-4 py-3 max-w-xs font-bold flex-grow",
      "transition-colors",
      themeClassName[theme],
      className
    )}
  >
    {children}
  </button>
);
