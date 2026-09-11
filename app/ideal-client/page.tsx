import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { idealClient } from "@/content/services";

export const metadata = {
  title: "Ideal Client",
  description:
    "The businesses and brands we do our best work with — and the ones we're probably not the right fit for.",
};

export default function IdealClientPage() {
  return (
    <>
      <section className="bg-brand-navy py-section text-white">
        <Container>
          <p className="eyebrow text-white/80">Ideal client</p>
          <h1 className="mt-4 text-display-xl max-w-3xl text-white">
            Great work starts with the right fit.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            {idealClient.intro}
          </p>
        </Container>
      </section>

      <section className="section bg-surface">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-ink/5 bg-white p-8 shadow-card">
              <h2 className="text-2xl text-brand-navy">You're a great fit if…</h2>
              <ul className="mt-6 space-y-3">
                {idealClient.yesList.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-muted">
                    <span
                      aria-hidden
                      className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-white"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink/5 bg-surface-muted p-8">
              <h2 className="text-2xl text-brand-navy">We're probably not for you if…</h2>
              <ul className="mt-6 space-y-3">
                {idealClient.notFor.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-muted">
                    <span
                      aria-hidden
                      className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-ink/10 text-xs font-bold text-ink-subtle"
                    >
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-surface-muted">
        <Container className="text-center">
          <h2 className="text-display-lg">Sound like you?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Let's set up a quick call and see if it makes sense to work together.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Book a discovery call</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
