import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { serviceCategories } from "@/content/services";

export const metadata = {
  title: "Services",
  description:
    "The specific services we offer — from short-form video to paid social — and what each one includes.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-navy py-section text-white">
        <Container>
          <p className="eyebrow text-white/80">Services</p>
          <h1 className="mt-4 text-display-xl max-w-3xl text-white">
            Pick what you need. Skip what you don't.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Every engagement is customized, but these are the building blocks we
            work in. Most clients mix two or three.
          </p>
        </Container>
      </section>

      <section className="section bg-surface">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {serviceCategories.map((s, i) => {
              const isLoneLast =
                serviceCategories.length % 2 === 1 &&
                i === serviceCategories.length - 1;
              return (
              <div
                key={s.slug}
                className={`rounded-2xl border border-ink/5 bg-white p-8 shadow-card ${
                  isLoneLast ? "md:col-span-2 md:mx-auto md:w-[calc(50%-1rem)]" : ""
                }`}
              >
                <h2 className="text-2xl text-brand-navy">{s.title}</h2>
                <p className="mt-3 text-ink-muted">{s.summary}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-muted">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-surface-muted">
        <Container className="text-center">
          <h2 className="text-display-lg">Not sure what you need?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            That's normal. We'll help you figure out the right mix on a quick
            call.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/contact">Get in touch</Button>
            <Button href="/pricing" variant="secondary">
              See pricing
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
