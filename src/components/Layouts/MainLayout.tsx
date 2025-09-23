"use client";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default MainLayout;
