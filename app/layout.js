import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WalkThruNY — Walk your floor plans at full scale",
  description:
    "Albany's’s full-scale floor plan walkthrough studio. Validate layouts, optimize flow, and make confident design decisions before you build.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <footer className="border-t border-black/[0.06] dark:border-white/[0.12]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-foreground/80 grid gap-4 md:grid-cols-2">
            <div>
              <p className="font-semibold">WalkThruNY</p>
              <p className="mt-1">Walk your floor plans at 1:1 scale before you build.</p>
            </div>
            <div className="md:text-right">
              <p>Albany, NY</p>
              <p>
                <a className="underline hover:no-underline" href="mailto:hello@walkthruny.com">hello@walkthruny.com</a>
              </p>
              <p className="mt-2">© {new Date().getFullYear()} WalkThruNY. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
