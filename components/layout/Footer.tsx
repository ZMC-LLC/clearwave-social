import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-surface-muted">
      <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={1796}
            height={450}
            className="h-10 w-auto"
          />
          <p className="mt-3 text-sm text-ink-muted">{siteConfig.tagline}.</p>
          <p className="mt-4 text-xs text-ink-subtle">
            A service of{" "}
            <a
              href={siteConfig.parentUrl}
              className="underline decoration-brand-accent underline-offset-4 hover:text-brand-navy"
            >
              {siteConfig.parent}
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-subtle">
              Explore
            </div>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-muted hover:text-brand-navy">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-subtle">
              Contact
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-ink-muted hover:text-brand-navy"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="mt-2 block text-ink-muted hover:text-brand-navy"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </Container>
      <div className="border-t border-ink/5">
        <Container className="flex items-center justify-between py-4 text-xs text-ink-subtle">
          <span>© {new Date().getFullYear()} {siteConfig.parent}</span>
          <span>All rights reserved.</span>
        </Container>
      </div>
    </footer>
  );
}
