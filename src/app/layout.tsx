import MainLayout from "@/components/Layouts/MainLayout";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "Remiq",
  description:
    "",
};
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


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
        <body className={`${poppins.variable}  antialiased `}>
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </Providers>
  );
}
