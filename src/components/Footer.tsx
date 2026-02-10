export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="text-center text-sm text-slate-400">
          {/* TODO: Replace with your name */}
          &copy; {new Date().getFullYear()}Ben Hockley
        </p>
      </div>
    </footer>
  );
}
