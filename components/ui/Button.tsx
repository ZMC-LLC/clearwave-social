import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-accent text-white shadow-glow-accent hover:bg-brand-accent-hover",
  secondary:
    "bg-white text-brand-navy ring-1 ring-brand-navy/15 hover:ring-brand-navy/30",
  ghost:
    "bg-transparent text-white ring-1 ring-white/25 hover:bg-white/10",
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
