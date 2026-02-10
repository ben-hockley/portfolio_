"use client";

import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { href: "#bio", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#social", label: "Connect" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/70 backdrop-blur-md dark:bg-slate-900/70">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* TODO: Replace with your name or logo */}
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          Portfolio
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
