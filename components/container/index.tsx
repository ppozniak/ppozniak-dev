import clsx from "clsx";
import React from "react";

export const Container = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={clsx("container py-14", className)} {...rest}>
    {children}
  </div>
);
