import clsx from "clsx";
import Link from "next/link";

interface IProps {
  variation?: "default" | "inline";
}

export const Logo = ({ variation = "default" }: IProps) => (
  <div className="font-mono text-white leading-none text-2xl md:text-3xl font-bold hover:opacity-90 transition-opacity">
    <Link href="/" title="Go to homepage">
      <span className="text-primary">p</span>
      <span className="">pozniak</span>
      <span
        className={clsx(
          variation === "default" && "block",
          "text-right text-primary"
        )}
      >
        .dev
      </span>
    </Link>
  </div>
);
