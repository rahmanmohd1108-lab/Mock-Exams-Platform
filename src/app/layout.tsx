import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mock Exams Platform",
  description: "Practice mock exams for SSC, RRB, UPSC, and state PSC with built-in timers, analytics, and past papers.",
  keywords: ["mock exams", "SSC", "RRB", "UPSC", "state PSC", "practice tests", "previous year papers"],
  authors: [{ name: "Mock Exams Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Mock Exams Platform",
    description: "Practice mock exams for SSC, RRB, UPSC, and state PSC with built-in timers, analytics, and past papers.",
    url: "https://mock-exams.example",
    siteName: "Mock Exams Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mock Exams Platform",
    description: "Practice mock exams for SSC, RRB, UPSC, and state PSC with built-in timers, analytics, and past papers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
