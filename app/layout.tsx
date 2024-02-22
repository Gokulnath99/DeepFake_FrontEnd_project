import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import { ClerkProvider } from '@clerk/nextjs'
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
          <body className={cn(
            'min-h-screen font-sans antialiased grainy'
            )}>
              <div>
                <Navbar/>
                <div style={{ margin: '0 auto', padding: '20px', maxWidth: '1200px'}}>
                  <DarkModeToggle />
                  {children}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-80"
                  >
                    <div
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                  </div>
                </div>
              </div>
            
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
    
  );
}

