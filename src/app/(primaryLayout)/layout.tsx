import { Header } from "@/components/UI/Header";
import Sidebar from "@/components/UI/Sidebar";
import { ReactNode } from "react";

interface PrimaryLayoutProps {
  children: ReactNode;
}

export default function PrimaryLayout({ children }: PrimaryLayoutProps) {
  return (
    <>
      <section className="bg-primary">
        <Header />
        <div className="mx-auto md:pl-16 xxl:pl-0 min-h-[calc(100vh-65px)]">
          <Sidebar />
          <div className="px-2 mb-[48px]" >
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
