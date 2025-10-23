import FAQSection from "@/components/primaryLayout/support-pages/Faq";
import { faq } from "@/constants/faqData";
import React from "react";

export default function page() {
  return <FAQSection faq={faq} />;
}
