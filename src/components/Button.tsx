import { ArrowIcon } from "@/components/icons";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  icon,
  className = "",
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition ${
        isPrimary
          ? "bg-accent text-text hover:bg-deep"
          : "border border-border text-text hover:border-accent"
      } ${className}`}
    >
      <span>{children}</span>
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isPrimary ? "bg-bg text-accent" : "bg-accent text-bg"
        }`}
      >
        {icon ?? <ArrowIcon />}
      </span>
    </a>
  );
}
