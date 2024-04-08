import type { Metadata } from "next";
import "./globals.css";
import "@/vendor/FontAwesome";
import { circularStd } from "@/fonts/fonts";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='text-[15px] text-[#1f1f1f]' style={circularStd.style}>{children}</body>
    </html>
  );
}
