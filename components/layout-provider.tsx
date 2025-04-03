import React, { ReactNode } from "react";
import LayoutHeader from "./layout-header";
import LayoutFooter from "./layout-footer";

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <LayoutHeader />
      <main className="flex-1 overflow-auto">{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default LayoutProvider;
