import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact",
  description: "Book a discovery call or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy py-section text-white">
        <Container>
          <p className="eyebrow text-white/80">Contact</p>
          <h1 className="mt-4 text-display-xl max-w-3xl text-white">
            Let's talk about your social.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Tell us a bit about your business and what you're hoping to
            accomplish. We'll get back within one business day.
          </p>
        </Container>
      </section>

      <section className="section bg-surface">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-display-md text-brand-navy">Get in touch</h2>
            <p className="mt-4 text-ink-muted">
              Prefer email? We're at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-accent underline underline-offset-4 hover:text-brand-accent-hover"
              >
                {siteConfig.email}
              </a>
              .
            </p>
            <p className="mt-4 text-ink-muted">
              Or call/text{" "}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="text-brand-accent underline underline-offset-4 hover:text-brand-accent-hover"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
            <p className="mt-4 text-ink-muted">
              Every inquiry gets a personal reply — no automated funnels here.
            </p>
          </div>

          <form
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-ink/5 bg-white p-8 shadow-card"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-ink">
                  Business or brand
                </label>
                <input
                  id="business"
                  name="business"
                  className="mt-1 w-full rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink">
                  What are you hoping to accomplish?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-glow-accent transition hover:bg-brand-accent-hover"
              >
                Send message
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}
