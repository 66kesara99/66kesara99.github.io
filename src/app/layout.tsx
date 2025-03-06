import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Background } from "./_components/background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kesara Gamlath",
  description: "Kesara Gamlath. A Full Stack Web Developer.",
  referrer: "origin-when-cross-origin",
  keywords: ["Kesara", "Gamlath", "66kesara99"],
  authors: [{ name: "Kesara Gamlath" }],
  creator: "Kesara Gamlath",
  publisher: "Kesara Gamlath",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://66kesara99.github.io/"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "W5uyS5qnPmzFQ0ALuvwy5w0pWVI7EE0TTUXZ9sgqJqg",
  },
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Background>{children}</Background>
      </body>
    </html>
  );
}
