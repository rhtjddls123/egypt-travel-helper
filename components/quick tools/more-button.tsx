import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface MoreButtonProps {
  href: string;
}

const MoreButton = ({ href }: MoreButtonProps) => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center w-20 h-9 text-sm font-medium text-gold-primary hover:bg-accent rounded-md hover:text-gray-600"
    >
      더보기
      <ChevronRight className="ml-1 w-4 h-4" />
    </Link>
  );
};

export default MoreButton;
