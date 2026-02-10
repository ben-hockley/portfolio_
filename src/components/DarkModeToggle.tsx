"use client";

import { useSyncExternalStore, useCallback } from "react";

function getSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot(): boolean {
  return false;
}

function subscribe(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function initTheme(): void {
  if (typeof window === "undefined") return;
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const isDark = stored === "dark" || (!stored && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
}

if (typeof window !== "undefined") {
  initTheme();
}

export default function DarkModeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }, []);

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full p-2 text-[var(--text-muted)] transition-all hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/25"
    >
      {dark ? (
        /* Sun icon: circle with 8 equal rays */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="12" x2="20" y2="12" strokeWidth={2} strokeLinecap="round" />
          <line x1="14.828" y1="14.828" x2="17.657" y2="17.657" strokeWidth={2} strokeLinecap="round" />
          <line x1="12" y1="16" x2="12" y2="20" strokeWidth={2} strokeLinecap="round" />
          <line x1="9.172" y1="14.828" x2="6.343" y2="17.657" strokeWidth={2} strokeLinecap="round" />
          <line x1="8" y1="12" x2="4" y2="12" strokeWidth={2} strokeLinecap="round" />
          <line x1="9.172" y1="9.172" x2="6.343" y2="6.343" strokeWidth={2} strokeLinecap="round" />
          <line x1="12" y1="8" x2="12" y2="4" strokeWidth={2} strokeLinecap="round" />
          <line x1="14.828" y1="9.172" x2="17.657" y2="6.343" strokeWidth={2} strokeLinecap="round" />
        </svg>
      ) : (
        /* Moon icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      )}
    </button>
  );
}
