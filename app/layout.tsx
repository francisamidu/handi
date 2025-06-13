import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handi",
  description: "Connecting Malawians with reliable, skilled handymen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} `}>{children}</body>
    </html>
  );
}
