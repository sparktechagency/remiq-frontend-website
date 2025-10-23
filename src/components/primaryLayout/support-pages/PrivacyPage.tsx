import PolicyLayout from "@/components/shared/PolicyLayout";
import { supportPages } from "@/constants/supportData";
import React from "react";

export default function PrivacyPage() {
  const privacyData = supportPages?.privacy;

  return (
    <PolicyLayout content={privacyData.content} title={privacyData.title} />
  );
}
