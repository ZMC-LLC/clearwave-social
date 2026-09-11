import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { pricingTiers } from "@/content/services";

export const metadata = {
  title: "Pricing",
  description:
    "Straightforward monthly retainer pricing for social media marketing services.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-brand-navy py-section text-white">
        <Container>
          <p className="eyebrow text-white/80">Pricing</p>
          <h1 className="mt-4 text-display-xl max-w-3xl text-white">
            Clear pricing. No surprise line items.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Monthly retainers, cancel with 30 days notice. Custom projects and
            one-off content packages available on request.
          </p>
        </Container>
      </section>

      <section className="section bg-surface">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "flex flex-col rounded-2xl border p-8 shadow-card",
                  tier.featured
                    ? "border-brand-accent bg-brand-navy text-white"
                    : "border-ink/5 bg-white"
                )}
              >
                <div className="flex items-baseline justify-between">
                  <h3
                    className={cn(
                      "text-xl font-semibold",
                      tier.featured ? "text-white" : "text-brand-navy"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "text-4xl font-semibold tracking-tight",
                      tier.featured ? "text-white" : "text-brand-navy"
                    )}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      tier.featured ? "text-white/70" : "text-ink-subtle"
                    )}
                  >
                    {tier.cadence}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm",
                    tier.featured ? "text-white/80" : "text-ink-muted"
                  )}
                >
                  {tier.tagline}
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex gap-3",
                        tier.featured ? "text-white/90" : "text-ink-muted"
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full",
                          tier.featured ? "bg-white" : "bg-brand-accent"
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant={tier.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-ink-subtle">
            All plans include ad spend management if applicable. Ad spend is
            billed separately, direct to the platform.
          </p>
        </Container>
      </section>
    </>
  );
}
