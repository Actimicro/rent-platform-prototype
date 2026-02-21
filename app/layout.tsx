import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RENT OS UI Shell",
  description: "Landing and role-based dashboards prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 font-sans antialiased">{children}</body>
    </html>
  );
}
