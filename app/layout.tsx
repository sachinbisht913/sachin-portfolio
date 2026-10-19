
import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Sachin Bisht | Full Stack Developer",
  description:
    "Portfolio of Sachin Bisht, an MCA graduate and developer building modern web and AI-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
<html lang="en">
  <body className="relative min-h-screen bg-transparent">
    <AnimatedBackground />
    <div className="relative z-10">
      {children}
    </div>
  </body>
</html>

  );
}
