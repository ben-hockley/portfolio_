"use client";

import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { href: "#bio", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#social", label: "Connect" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* TODO: Replace with your name or logo */}
        <a href="#" className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Portfolio
        </a>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
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
