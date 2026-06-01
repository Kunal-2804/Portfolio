import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import EmailSidebar from "./components/EmailSidebar";
import Preloader from "./components/Preloader";

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
  title: "Kunal Gawande",
  description: "Portfolio of Kunal Gawande - Fullstack Developer specializing in building modern, scalable, and high-performance web applications using React, Next.js, Node.js, and databases.",
  keywords: [
    "Kunal Gawande",
    "Kunal Gawande Portfolio",
    "Kunal Gawande Developer",
    "Kunal Gawande Fullstack",
    "Kunal Gawande Software Engineer",
    "Kunal Gawande React",
    "Kunal Gawande Next.js",
    "Kunal Gawande India",
    "Fullstack Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "TripSathi Developer",
    "MERN Stack Developer",
  ],
  authors: [{ name: "Kunal Gawande", url: "https://github.com/Kunal-2804" }],
  creator: "Kunal Gawande",
  publisher: "Kunal Gawande",
  alternates: {
    canonical: "https://kunal28-portfolio.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kunal28-portfolio.vercel.app/",
    title: "Kunal Gawande | Fullstack Developer",
    description: "Portfolio of Kunal Gawande - Fullstack Developer specializing in building modern, scalable, and high-performance web applications.",
    siteName: "Kunal Gawande Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Gawande | Fullstack Developer",
    description: "Portfolio of Kunal Gawande - Fullstack Developer specializing in building modern, scalable, and high-performance web applications.",
    creator: "@Kunal_2804",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kunal Gawande",
    "jobTitle": "Fullstack Developer",
    "url": "https://kunal28-portfolio.vercel.app/",
    "sameAs": [
      "https://github.com/Kunal-2804",
      "https://www.linkedin.com/in/kunalgawande28/",
      "mailto:kunalkhindevgawande@gmail.com"
    ],
    "description": "Kunal Gawande is a highly skilled Fullstack Developer specializing in building scalable, modern web applications using React, Next.js, Node.js, and databases like MongoDB, PostgreSQL, and Supabase.",
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "Fullstack Development",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-white cursor-none [&_*]:cursor-none">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <CustomCursor />
        <ParticleBackground />
        <EmailSidebar />
        {children}
      </body>
    </html>
  );
}
