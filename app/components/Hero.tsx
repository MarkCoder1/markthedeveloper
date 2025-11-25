"use client";
import dynamic from "next/dynamic";
const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-16 pb-24" id="hero">
      <div className="mx-auto max-w-6xl px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-8 relative"
        >
          <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-50 pointer-events-none" />
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl leading-tight">
            Shipping <span className="text-primary">performant</span>,
            <br className="hidden sm:block" /> accessible & maintainable web products.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I focus on Core Web Vitals, robust component architectures, and user-centric journeys. I turn
            ambiguity into practical, scalable solutions with thoughtful iteration.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:shadow transition-shadow"
            >
              View Projects
            </Link>
            <Link
              href="#experience"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent/50 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent/50 transition-colors"
            >
              Contact
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
