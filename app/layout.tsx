// Global layout for every page.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { cn, getCurrentYear } from "@/lib/utils";
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
  icons: ["favicon.ico", "logo.png", "logo.svg"],
  category: "portfolio",
  openGraph: {
    title: "Runkang10",
    description: `Hi, I'm Runkang10, a ${
      getCurrentYear() - 2010
    } years old developer and founder of SyS App.`,
    images: [
      {
        url: "https://runkang10.sysapp.org/og.png",
        alt: "Runkang10",
        width: 1200,
        height: 630,
      },
      {
        url: "https://runkang10.sysapp.org/og.svg",
        alt: "Runkang10",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Runkang10",
    description: `Hi, I'm Runkang10, a ${
      getCurrentYear() - 2010
    } years old developer and founder of SyS App.`,
    images: [
      {
        url: "https://runkang10.sysapp.org/og.png",
        alt: "Runkng10",
        width: 1200,
        height: 630,
      },
      {
        url: "https://runkang10.sysapp.org/og.svg",
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
          "antialiased w-screen min-h-screen flex flex-col"
        )}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="min-w-full min-h-[550px] mx-auto flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
