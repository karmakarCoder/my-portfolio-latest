import type { Metadata } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/provider/LenisProvider";
import TranstackProvider from "@/provider/TranstackProvider";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const SpaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Rodro Karmakar",
  description: "Full-stack Engineer & System Designer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        SpaceGrotesk.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full bg-black">
        <div className="min-h-screen w-full relative">
          {/* Cosmic Noise Background */}
          <div
            className="inset-0 z-0 pointer-events-none fixed"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #0A1210 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0A1210 0%, #0B2B2D 100%)",
            }}
          />
          <div className="relative z-10">
            <LenisProvider>
              <TranstackProvider>{children}</TranstackProvider>{" "}
            </LenisProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
