import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pill IQ — Scan any medicine. Know exactly what you're taking.",
  description:
    "Point your camera at any packaging, blister pack, or bottle. Pill IQ reads it and explains the uses, dosage, side effects, warnings, and storage — in seconds, in plain language.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
