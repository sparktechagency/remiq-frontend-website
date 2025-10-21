"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  User,
  Upload,
  MessageSquare,
} from "lucide-react";
import { MdOutlineExplore } from "react-icons/md";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/", icon: Home },
    { href: "/explore", icon: MdOutlineExplore },
    { href: "/profile", icon: User },
    { href: "/upload", icon: Upload },
    { href: "/messages", icon: MessageSquare },
  ];

  return (
    <>
      {/* Desktop / Large screens: Sidebar on the left */}
      <aside className="hidden sm:fixed sm:bottom-0 sm:left-0 sm:h-[calc(100%-64px)] sm:w-16 sm:bg-[#07121A] sm:border-r sm:border-slate-800 sm:flex sm:flex-col sm:items-center sm:gap-3 sm:py-4 z-30">
        {navItems.map(({ href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <button
              key={href}
              onClick={() => router.push(href)}
              className={`
                flex items-center justify-center
                cursor-pointer
                w-10 h-10 rounded-lg
                transition-colors duration-200
                ${isActive 
                  ? "text-blue-500 bg-slate-800" 
                  : "text-gray-400 hover:text-white hover:bg-slate-800/50"
                }
              `}
              aria-label={`Navigate to ${href}`}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </aside>

      {/* Mobile: Navigation bar at the bottom */}
      <nav className="fixed bottom-0 left-0 right-0 w-full bg-[#07121A] border-t border-slate-800 flex sm:hidden flex-row items-center justify-around py-1 z-40">
        {navItems.map(({ href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <button
              key={href}
              onClick={() => router.push(href)}
              className={`
                flex items-center justify-center
                w-10 h-10 rounded-lg
                transition-colors duration-200
                ${isActive 
                  ? "text-blue-500 bg-slate-800" 
                  : "text-gray-400 hover:text-white hover:bg-slate-800/50"
                }
              `}
              aria-label={`Navigate to ${href}`}
            >
              <Icon className="w-6 h-6" />
            </button>
          );
        })}
      </nav>
    </>
  );
}
