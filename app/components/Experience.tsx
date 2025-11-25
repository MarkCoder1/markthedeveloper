import { experience } from "../../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight mb-10">Experience</h2>
        <ol className="space-y-8 relative">
          {experience.map(item => (
            <li key={item.company + item.start} className="pl-6 border-l border-border relative">
              <span className="absolute -left-[7px] top-2 h-4 w-4 rounded-full bg-primary shadow" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div className="font-medium">
                  {item.role} · <span className="text-primary">{item.company}</span>
                </div>
                <time className="text-xs text-muted-foreground">
                  {item.start} – {item.end}
                </time>
              </div>
              <ul className="space-y-1 text-sm text-foreground-80 mb-3">
                {item.highlights.map(h => (
                  <li key={h} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {item.tech && (
                <div className="flex flex-wrap gap-1">
                  {item.tech.map(t => (
                    <span key={t} className="rounded-full bg-accent/40 px-2 py-1 text-[11px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}