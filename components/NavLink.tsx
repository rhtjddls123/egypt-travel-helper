"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  className: string;
  activeClassName: string;
  children: ReactNode;
  end?: boolean;
}

const NavLink = ({ href, className, activeClassName, end = false, children }: NavLinkProps) => {
  const path = usePathname();
  const activePath = end ? path.endsWith(href) : path.startsWith(href);
  return (
    <Link href={href} className={activePath ? cn(className, activeClassName) : className}>
      {children}
    </Link>
  );
};

export default NavLink;
