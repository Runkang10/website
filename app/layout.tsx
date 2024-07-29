// Global layout for every page.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// CSS
import "@/css/loading.css";
import "@/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Runkang10",
    template: "%s | Runkang10"
  },
  description: "Founder of SyS App.",
  icons: [
    "favicon.ico",
    "logo.png"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased w-screen min-h-screen flex flex-col")} suppressHydrationWarning>
        <NavBar />
        <main className="min-w-full min-h-[500px] flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        {/* Vercel */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
