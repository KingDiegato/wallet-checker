import type { Metadata } from "next";
import "./globals.css";
import { Modak } from "next/font/google";
const modak = Modak({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flushies! || Wallet Checker ||",
  description: "Check the elegibility of your wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={modak.className}>{children}</body>
    </html>
  );
}
