import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { NextAuthProvider } from "./providers";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "EatLabs",
  description: "Food Delivery App for Students on Campus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body
          suppressHydrationWarning={true}
          className={`${lato.variable} ${lato.className} ${lato.style} antialiased`}
        >
          {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
