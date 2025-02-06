import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "SKIN | AI",
  description: "An AI which can detect the skin tone and guess the watch strap or watch color.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 bg-white">
        <Navbar />
        <br />
        {children}
      </body>
    </html>
  );
}
