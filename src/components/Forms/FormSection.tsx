"use client";

import type React from "react";

interface FormSectionProps {
  title?: string;
  children: React.ReactNode;
}

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="space-y-3">
      {title && (
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
