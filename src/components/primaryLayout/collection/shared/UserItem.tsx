import type React from "react";
import { Avatar } from "antd";

interface UserItemProps {
  name: string;
  handle: string;
  avatar: string;
  action?: React.ReactNode;
}

export function UserItem({ name, handle, avatar, action }: UserItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-700">
      <div className="flex items-center gap-3">
        <Avatar src={avatar} size={40} />
        <div>
          <p className="text-sm font-medium text-slate-100">{name}</p>
          <p className="text-xs text-slate-400">@{handle}</p>
        </div>
      </div>
      {action}
    </div>
  );
}
