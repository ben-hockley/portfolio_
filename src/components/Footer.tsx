export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          {/* TODO: Replace with your name */}
          &copy; {new Date().getFullYear()}Ben Hockley
        </p>
      </div>
    </footer>
  );
}
