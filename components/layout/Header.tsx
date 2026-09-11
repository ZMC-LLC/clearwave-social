import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/85 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={1796}
            height={450}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-muted transition hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" className="hidden md:inline-flex">
          Book a call
        </Button>
      </Container>
    </header>
  );
}
