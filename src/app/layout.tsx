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
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
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
        className="antialiased font-dm bg-[var(--bg)] text-[var(--text)]"
      >
        {children}
      </body>
    </html>
  );
}
