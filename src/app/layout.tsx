import type { Metadata } from "next";
import { Background } from "./_components/background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kesara Gamlath",
  description: "Portfolio of Kesara Gamlath. A Full Stack Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background>{children}</Background>
      </body>
    </html>
  );
}
