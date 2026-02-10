export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-700/50 bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="text-center text-sm text-gray-600 dark:text-slate-400">
          {/* TODO: Replace with your name */}
          &copy; {new Date().getFullYear()}Ben Hockley
        </p>
      </div>
    </footer>
  );
}
