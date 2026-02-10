"use client";

import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { href: "#bio", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#social", label: "Connect" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(240,245,247,0.85)] dark:bg-[rgba(5,10,15,0.8)] border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-[var(--text)]">
          <span className="text-accent text-xl">◉</span>
          Portfolio
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-accent after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#projects"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-[#00c8b8] to-[#0095e8] px-5 py-2 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_20px_rgba(0,212,200,0.3)]"
          >
            My Work
          </a>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
