import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "JJ Pools and SPA | Luxury Pool Builder — Winter Garden, Florida",
  description:
    "Premium fiberglass pools, ceramic pools and luxury spas with complete turnkey installation across Florida. One trusted team — design to dive in.",
  keywords: [
    "luxury pools Florida",
    "fiberglass pool builder",
    "swimming pool installation Winter Garden",
    "luxury spa Florida",
    "JJ Pools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
