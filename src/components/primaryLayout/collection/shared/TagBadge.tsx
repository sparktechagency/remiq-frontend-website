import { Badge } from "antd";

interface TagBadgeProps {
  text: string;
  variant?: "default" | "outline";
}

export function TagBadge({ text, variant = "default" }: TagBadgeProps) {
  return (
    <Badge
      color={variant === "outline" ? "transparent" : "#3b82f6"}
      text={
        <span
          className={`text-xs font-medium ${
            variant === "outline"
              ? "text-blue-400 border border-blue-400 px-2 py-1 rounded"
              : "text-white"
          }`}
        >
          {text}
        </span>
      }
    />
  );
}
