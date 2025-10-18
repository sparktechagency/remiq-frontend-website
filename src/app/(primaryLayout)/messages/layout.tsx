import ChatSidebar from "@/components/primaryLayout/messages/chat-sidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full grid grid-cols-9  ">
      <aside className="col-span-2">
        <ChatSidebar />
      </aside>
      <main className="col-span-7">{children}</main>
    </section>
  );
}
