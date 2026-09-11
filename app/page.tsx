import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { homeOutcomes, outcomes } from "@/content/services";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface py-section">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-accent-alt/10 blur-3xl" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="eyebrow">Social media, done right</p>
            <h1 className="mt-4 text-display-xl text-brand-navy">
              {siteConfig.tagline}.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Book a discovery call</Button>
              <Button href="/outcomes" variant="secondary">
                See what changes
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-section text-white">
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-accent/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-accent-alt/20 blur-3xl" />
        <Container className="relative">
          <div className="max-w-2xl">
            <p className="eyebrow">{homeOutcomes.eyebrow}</p>
            <h2 className="mt-3 text-display-lg text-white">
              {homeOutcomes.heading}
            </h2>
            <p className="mt-4 text-white/75">{homeOutcomes.intro}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {outcomes.map((o) => (
              <div
                key={o.slug}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <h3 className="text-xl text-white">{o.title}</h3>
                <p className="mt-3 text-white/70">{o.summary}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/outcomes">See the full picture</Button>
            <Button href="/services" variant="ghost">
              See what's included
            </Button>
          </div>
        </Container>
      </section>

      <section className="section bg-surface-muted">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-16 text-center text-white md:px-16">
            <div className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-25 mix-blend-screen" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-accent/30 blur-3xl" />
            <div className="relative">
              <h2 className="text-display-lg text-white">Ready to stop guessing?</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Tell us about your business and we'll come back with a plan for
                how social could actually contribute to revenue.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact">Get in touch</Button>
                <Button href="/pricing" variant="ghost">
                  See pricing
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
