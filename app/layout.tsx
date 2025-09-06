import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "NeuraSprint AI — Automation at Sprint Speed",
  description:
    "Ship automations in weeks, not quarters. NeuraSprint AI delivers 3–4 lightweight automations in 30 days.",
  icons: {
  icon: "/favicon.svg?v=2",            // cache-bust
  apple: "/favicon.svg?v=2",
  },
  openGraph: {
    title: "NeuraSprint AI",
    description: "Operational automations in 30 days.",
    url: "https://neurasprintai.com",
    siteName: "NeuraSprint AI",
    images: ["/og.png"]
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-white text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
