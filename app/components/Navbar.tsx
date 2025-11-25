"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Mark<span className="text-primary">.</span>
        </Link>
        <ul className="hidden gap-6 text-sm md:flex">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
