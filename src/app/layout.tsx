import type { Metadata } from "next";
import "./globals.css";

/* TODO: Replace with your own personal details for SEO */
export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description:
    "Personal portfolio showcasing projects and skills. Replace this with your own description.",
  openGraph: {
    title: "Your Name — Portfolio",
    description:
      "Personal portfolio showcasing projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var saved = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (saved === 'dark' || (!saved && prefersDark)) {
              document.documentElement.classList.add('dark');
            }
          })();
        `}} />
      </head>
      <body
        className="antialiased bg-white text-gray-900 dark:bg-slate-900 dark:text-slate-100"
      >
        {children}
      </body>
    </html>
  );
}
