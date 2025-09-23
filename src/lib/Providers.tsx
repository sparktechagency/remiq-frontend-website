"use client";
import { store } from "@/redux/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
      <Provider store={store}>
            <AntdRegistry>{children}</AntdRegistry>
      </Provider>
  );
};

export default Providers;
