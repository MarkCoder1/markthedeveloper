export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mark The Developer</p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground text-muted-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground text-muted-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mark@example.com"
            className="hover:text-foreground text-muted-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
