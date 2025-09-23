import MainLayout from "@/components/Layouts/MainLayout";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Remiq",
  description:
    "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html
        lang='en'
      >
        <body>
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </Providers>
  );
}
