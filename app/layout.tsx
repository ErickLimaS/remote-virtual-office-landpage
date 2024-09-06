import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/layout";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
