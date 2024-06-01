import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import clsx from "clsx";

type ButtonTheme = "primary" | "secondary";

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  theme?: ButtonTheme;
} & ComponentPropsWithoutRef<T>;

const themeClassName: Record<ButtonTheme, string> = {
  primary: "bg-primary text-white hover:bg-primary-100",
  secondary: "bg-white text-black hover:bg-grey",
};

export const Button = <T extends ElementType>({
  as,
  children,
  className,
  theme = "primary",
  ...rest
}: ButtonProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      {...rest}
      className={clsx(
        "max-w-xs flex-grow rounded-3xl px-4 py-3 font-semibold text-center",
        "transition-colors",
        themeClassName[theme],
        className,
      )}
    >
      {children}
    </Component>
  );
};
