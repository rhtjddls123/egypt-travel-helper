import React, { ReactNode } from "react";
import LayoutHeader from "./layout-header";
import LayoutFooter from "./layout-footer";

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-sand-primary">
      <LayoutHeader />
      <main className="container max-w-[1400px] mx-auto flex-1 overflow-auto p-4">{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default LayoutProvider;
