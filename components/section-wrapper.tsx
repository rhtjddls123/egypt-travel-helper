import { ReactNode } from "react";
import MoreButton from "./quick tools/more-button";

interface SectionWrapperProps {
  title: string;
  href: string;
  children: ReactNode;
}

const SectionWrapper = ({ title, href, children }: SectionWrapperProps) => {
  return (
    <section className="mt-6">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-bold">{title}</h2>
        <MoreButton href={href} />
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
