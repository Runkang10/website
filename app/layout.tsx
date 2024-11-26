// Global layout for every page.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer";
import { cn } from "@/lib/utils";
import { Description, Title, TitleTemplate } from "@/lib/seo";

// CSS
import "@/css/loading.css";
import "@/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: Title,
    template: TitleTemplate,
  },
  description: Description,
  icons: [
    "favicon.ico",
    "logo.png",
    "logo.svg",
    "logo-x0.5.png",
    "logo-x0.75.png",
    "logo-x1.5.png",
    "logo-x2.png",
    "logo-x3.png",
    "logo-x4.png",
  ],
  category: "portfolio",
  openGraph: {
    title: "Runkang10",
    description: Description,
    images: [
      {
        url: "/og.png",
        alt: "Runkang10",
        width: 1200,
        height: 630,
      },
      {
        url: "/og.svg",
        alt: "Runkang10",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Runkang10",
    description: Description,
    images: [
      {
        url: "/og.png",
        alt: "Runkng10",
        width: 1200,
        height: 630,
      },
      {
        url: "/og.svg",
        alt: "Runkang10",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "antialiased min-h-screen flex flex-col"
        )}
        suppressHydrationWarning
      >
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
