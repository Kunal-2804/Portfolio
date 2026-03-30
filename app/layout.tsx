import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import EmailSidebar from "./components/EmailSidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kunal Gawande | Frontend Developer",
  description: "Portfolio of Kunal Gawande, a passionate Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-white">
        <CustomCursor />
        <ParticleBackground />
        <EmailSidebar />
        {children}
      </body>
    </html>
  );
}
