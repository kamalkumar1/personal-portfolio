import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import { AnalyticsBootstrap } from "@/components/AnalyticsBootstrap";
import { AnalyticsClickTracker } from "@/components/AnalyticsClickTracker";
import { AnalyticsScrollTracker } from "@/components/AnalyticsScrollTracker";
import { AnalyticsSectionTracker } from "@/components/AnalyticsSectionTracker";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { siteConfig } from "@/constants/site";
import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1474e4",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.title,
    images: [{ url: siteConfig.ogImagePath, width: 420, height: 420, alt: siteConfig.author }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImagePath],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <GoogleAnalytics />
        <AnalyticsBootstrap />
        <AnalyticsClickTracker />
        <AnalyticsSectionTracker />
        <AnalyticsScrollTracker />
        {children}
      </body>
    </html>
  );
}
