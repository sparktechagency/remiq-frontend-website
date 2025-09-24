"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  User,
  Upload,
  MessageSquare,
  Users,
} from "lucide-react"; // lightweight icons
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
   <aside className="fixed bottom-0 left-0 h-[calc(100%-64px)] w-16 bg-[#07121A]  border-r border-slate-800 flex flex-col items-center gap-3 py-4">
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

  );
}
