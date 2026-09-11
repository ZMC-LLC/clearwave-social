import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { outcomes } from "@/content/services";

export const metadata = {
  title: "Outcomes",
  description:
    "What changes when social finally works — the shifts we help small businesses and personal brands make, and what we actually do to get you there.",
};

export default function OutcomesPage() {
  return (
    <>
      <section className="bg-brand-navy py-section text-white">
        <Container>
          <p className="eyebrow text-white/80">Outcomes</p>
          <h1 className="mt-4 text-display-xl max-w-3xl text-white">
            What changes when social finally works.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Tactics are easy to list. The reason you'd hire us is the shift on
            the other side of the work — here's what that actually looks like.
          </p>
        </Container>
      </section>

      <section className="section bg-surface">
        <Container>
          <div className="space-y-16">
            {outcomes.map((o, i) => (
              <article
                key={o.slug}
                className="grid gap-10 md:grid-cols-[auto,1fr] md:gap-14"
              >
                <div className="text-sm font-semibold text-brand-accent md:pt-2">
                  0{i + 1}
                </div>
                <div>
                  <h2 className="text-display-lg text-brand-navy">
                    {o.title}
                  </h2>
                  <p className="mt-4 text-lg text-ink-muted">{o.summary}</p>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-ink/5 bg-surface-muted p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">
                        Without a plan
                      </p>
                      <p className="mt-2 text-ink-muted">{o.pain}</p>
                    </div>
                    <div className="rounded-2xl border border-brand-accent/20 bg-white p-6 shadow-card">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                        With us
                      </p>
                      <p className="mt-2 text-ink-muted">{o.shift}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold text-brand-navy">
                      What we actually do
                    </p>
                    <ul className="mt-3 space-y-2">
                      {o.levers.map((lever) => (
                        <li
                          key={lever}
                          className="flex gap-3 text-ink-muted"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent"
                          />
                          {lever}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-surface-muted">
        <Container className="text-center">
          <h2 className="text-display-lg">
            Which of these would move the needle most for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Book a 20-minute call and we'll tell you honestly which outcomes are
            in reach — and which ones aren't yet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Book a discovery call</Button>
            <Button href="/services" variant="secondary">
              See what's included
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
