import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuraSprint AI — Automation at Sprint Speed",
  description: "Ship automations in weeks, not quarters. NeuraSprint AI delivers 3–4 lightweight automations in 30 days.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
