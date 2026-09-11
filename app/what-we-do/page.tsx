import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { whatWeDo } from "@/content/services";

export const metadata = {
  title: "What We Do",
  description:
    "Our process for turning social media into a reliable growth channel for small businesses and personal brands.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className="bg-brand-navy py-section text-white">
        <Container>
          <p className="eyebrow text-white/80">What we do</p>
          <h1 className="mt-4 text-display-xl max-w-3xl text-white">
            Social that's built on strategy, not vibes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{whatWeDo.intro}</p>
        </Container>
      </section>

      <section className="section bg-surface">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-ink/5 bg-white p-8 shadow-card"
              >
                <div className="text-sm font-semibold text-brand-accent">
                  0{i + 1}
                </div>
                <h3 className="mt-2 text-xl text-brand-navy">{step.title}</h3>
                <p className="mt-3 text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-surface-muted">
        <Container className="text-center">
          <h2 className="text-display-lg">Curious if we're the right fit?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Book a 20-minute call. No pitch — just a straight answer about
            whether we can help you.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Book a discovery call</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
