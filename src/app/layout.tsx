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
      <body className="antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
