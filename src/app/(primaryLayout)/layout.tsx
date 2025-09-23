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
        <div className="max-w-7xl mx-auto">
          <Sidebar />
          {children}
        </div>
      </section>
    </>
  )
}
