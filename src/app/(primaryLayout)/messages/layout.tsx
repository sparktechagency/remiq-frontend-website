"use client";
import ChatSidebar from "@/components/primaryLayout/messages/chat-sidebar";
import { useParams } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  // useParams returns an object. We'll extract 'chatId' if present in current route.
  const params = useParams() as { chatId?: string };

  // On mobile, if a chatId is present, hide sidebar, show main content full width
  if (
    params?.chatId &&
    typeof window !== "undefined" &&
    window.innerWidth < 640
  ) {
    return <section className="h-full w-full">{children}</section>;
  }

  return (
    <section className="h-full grid grid-cols-1 sm:grid-cols-9">
      <aside className="col-span-1 sm:col-span-2">
        <ChatSidebar />
      </aside>
      <main className="hidden sm:block sm:col-span-7">{children}</main>
    </section>
  );
}
