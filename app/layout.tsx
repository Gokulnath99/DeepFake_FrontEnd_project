import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import DarkModeToggle from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepfake detection",
  description: "Identify the audio to be deepfake or not",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body className={cn("min-h-screen font-sans antialiased grainy")}>
            <div>
              <Navbar />
              <div
                style={{
                  margin: "0 auto",
                  padding: "20px",
                  maxWidth: "1200px",
                }}
              >
                <DarkModeToggle />
                {children}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-80"
                >
                </div>
              </div>
            </div>
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
