import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <footer className="border-t bg-slate-900 text-white border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <img src="/WalkThru_logo_white_no_tagline.png" alt="WalkThruNY" className="h-7 w-auto select-none" height="28" />
              <div>
                <p className="font-semibold">WalkThruNY</p>
                <p className="mt-1 text-white/80">Walk your floor plans at 1:1 scale before you build.</p>
              </div>
            </div>
            <div className="md:text-right">
              <p>Albany, NY</p>
              <p>
                <a className="underline hover:no-underline" href="mailto:hello@walkthruny.com">hello@walkthruny.com</a>
              </p>
              <p className="mt-2 text-white/70">© {new Date().getFullYear()} WalkThruNY. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
