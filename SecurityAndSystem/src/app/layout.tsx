import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const fontGlobal = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Security and System",
  description: "Prueba técnica para Security and System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fontGlobal.className}>{children}</body>
    </html>
  );
}
