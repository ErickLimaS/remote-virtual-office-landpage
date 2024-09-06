import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Layout from "./components/layout";

const midPointFont = localFont({
  src: "fonts/MintType-MidpointProRegular.woff2",
  display: "auto"
})

export const metadata: Metadata = {
  title: "RoboMeet | Welcome",
  description: "RoboMeet offers a dynamic virtual workspace for remote teams, providing an immersive environment with tools for communication, collaboration, and project management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={midPointFont.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
