export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Contact</h2>
        <p className="max-w-xl text-muted-foreground mb-6">
          Interested in collaborating or have an opportunity? Reach out and I’ll respond as soon as I can.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:mark@example.com"
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:shadow transition-shadow"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-5 py-2 text-sm font-medium hover:bg-accent/50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
