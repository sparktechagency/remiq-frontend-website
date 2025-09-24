import { Header } from "@/components/UI/Header"
import Sidebar from "@/components/UI/Sidebar"
import { ReactNode } from "react"

interface PrimaryLayoutProps {
  children: ReactNode
}

export default function PrimaryLayout({ children }: PrimaryLayoutProps) {
  return (
    <>
      <section className="bg-[#07121A]">
        <Header />
        <div className="max-w-7xl mx-auto pl-16 xxl:pl-0">
          <Sidebar />
          <div className="px-2 md:0">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
