import { stats } from "../../lib/data";

export default function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="stats-heading" className="sr-only">Key stats</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4 flex flex-col gap-1 shadow-sm">
              <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}