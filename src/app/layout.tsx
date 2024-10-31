import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Background } from "./_components/background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kesara Gamlath",
  description: "Portfolio of Kesara Gamlath. A Full Stack Web Developer.",
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
