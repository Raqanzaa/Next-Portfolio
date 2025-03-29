// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raqanzaa | Portfolio",
  description: "Modern & Cool Website Portfolio",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-gray-100 text-gray-900 font-sans antialiased`}>
        <nav className="p-4 bg-dark shadow-md flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="hidden md:flex space-x-10">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About</a></li>
            <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
          <button className="md:hidden p-2 focus:outline-none" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </nav>
        <main className="p-6 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
