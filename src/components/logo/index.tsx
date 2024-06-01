import clsx from "clsx";
import Link from "next/link";

interface IProps {
  variation?: "default" | "inline";
}

export const Logo = ({ variation = "default" }: IProps) => (
  <div className="font-mono text-lg font-bold leading-none text-white transition-opacity hover:opacity-90 md:text-xl">
    <Link href="/" title="Go to homepage">
      <span className="text-primary">p</span>
      <span className="">pozniak</span>
      <span
        className={clsx(
          variation === "default" && "block",
          "text-right text-primary",
        )}
      >
        .dev
      </span>
    </Link>
  </div>
);
