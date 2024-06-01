import React from "react";

import clsx from "clsx";

export const Container = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={clsx("container py-14", className)} {...rest}>
    {children}
  </div>
);
