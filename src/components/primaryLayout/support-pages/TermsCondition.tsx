import PolicyLayout from "@/components/shared/PolicyLayout";
import { supportPages } from "@/constants/supportData";
import React from "react";

export default function TermsCondition() {
  const termsContent = supportPages?.terms;
  return (
    <PolicyLayout content={termsContent.content} title={termsContent.title} />
  );
}
