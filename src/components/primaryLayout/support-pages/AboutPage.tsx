import PolicyLayout from "@/components/shared/PolicyLayout";
import { supportPages } from "@/constants/supportData";
import React from "react";

export default function AboutPage() {
  const supportData = supportPages?.about;
  return (
    <PolicyLayout content={supportData.content} title={supportData.title} />
  );
}
