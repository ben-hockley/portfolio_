export default function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-[var(--surface)] dark:bg-[#03080c]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="text-center text-sm text-[var(--text-muted)]">
          {/* TODO: Replace with your name */}
          &copy; {new Date().getFullYear()}Ben Hockley
        </p>
      </div>
    </footer>
  );
}
