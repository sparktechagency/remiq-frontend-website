import MainLayout from "@/components/Layouts/MainLayout";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Remiq",
  description: "",
};

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${poppins.className} `}>
          <Toaster
            position="top-center"
            duration={2000}
            toastOptions={{
              style: {
                background: "#07121A",
                color: "#FFFFFF",
                fontSize: "14px",
                border: "1px solid #7085FE",
              },
            }}
          />

          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </Providers>
  );
}
