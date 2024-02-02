import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "./lib/utils";
import Navbar from "./components/Navbar";

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
    <html lang="en">
      <body className={cn(
        'min-h-screen font-sans antialiased grainy'
      )}>
        <div style={{ margin: '0 auto', padding: '20px', maxWidth: '1200px' }}>
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}

