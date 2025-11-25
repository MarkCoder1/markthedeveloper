export default function About() {
  const core = [
    'TypeScript',
    'Next.js',
    'Performance',
    'Accessibility',
    'Testing',
    'Design Systems',
    'Node.js',
    'DevOps Basics',
  ];
  const values = [
    'Empathy-driven UX',
    'Maintainable abstractions',
    'Evidence-based decisions',
    'Incremental adoption',
  ];
  return (
    <section id="about" className="py-20 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            I craft interfaces that balance <span className="text-primary font-medium">clarity</span> and
            <span className="text-primary font-medium"> performance</span>. I enjoy profiling, improving Core Web Vitals,
            and making complex flows feel effortless. My approach favors small, reversible steps and strong collaboration.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {core.map(c => (
                <span key={c} className="rounded-full border border-border px-3 py-1 text-xs bg-accent/40">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Values</h3>
            <ul className="space-y-2 text-sm text-foreground-80">
              {values.map(v => (
                <li key={v} className="flex gap-2">
                  <span className="text-primary">▸</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Focus Areas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Web performance, component architecture, design tokens, accessibility automation, DX tooling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
