import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-primary-gradient shadow-soft p-10 text-primary-foreground">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_60%)]" />
          <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Let’s build something impactful.</h2>
            <p className="text-sm leading-relaxed opacity-90">
              I’m open to collaborating on products that value performance, accessibility, and thoughtful execution.
              Have a challenging UI problem or performance bottleneck? I’d love to help.
            </p>
            <div className="flex gap-3">
              <Link href="#contact" className="rounded-md bg-white/10 backdrop-blur px-5 py-2 text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors">
                Get in touch
              </Link>
              <Link href="#projects" className="rounded-md bg-white text-primary px-5 py-2 text-sm font-medium hover:shadow-sm transition-shadow">
                View work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}