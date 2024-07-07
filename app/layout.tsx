import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./context/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CVS CHARAN PORTFOLIO",
  description: "CVS CHARAN PORTFOLIO - WEB DEVELOPER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
