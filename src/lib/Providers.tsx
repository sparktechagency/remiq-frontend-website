"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdRegistry>
      {children}
    </AntdRegistry>
  );
};

export default Providers;
