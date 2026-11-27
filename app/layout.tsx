import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panha AI — Frontier AI for Cambodia",
  description:
    "Panha AI is an independent project committed to advancing safe, reliable, and useful artificial intelligence for the people of Cambodia.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "eiQfOrgyA9WBQJ0KrA1ZC1k8xZ1to2toP9gI1WTBxXo",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3eee3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site" id="top">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
