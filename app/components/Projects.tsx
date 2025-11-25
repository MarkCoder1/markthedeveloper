import { projects } from "../../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none transition-opacity" />
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="group-hover:text-primary transition-colors">{p.title}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{p.description}</p>
              {p.highlights && (
                <ul className="mb-4 space-y-1 text-xs text-foreground-80">
                  {p.highlights.map(h => (
                    <li key={h} className="flex gap-1">
                      <span className="text-primary">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1 mb-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent/50 px-2 py-1 text-[11px] font-medium text-foreground-80 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(p.link || p.repo) && (
                <div className="flex gap-3 mt-auto text-xs font-medium">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-border px-2 py-1 hover:bg-accent/60 transition-colors"
                    >
                      Live ↗
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-border px-2 py-1 hover:bg-accent/60 transition-colors"
                    >
                      Code ⧉
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
