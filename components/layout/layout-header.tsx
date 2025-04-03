"use client";
import { PathType } from "@/types/pathType";
import { ArrowLeft, Pyramid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const titleName: { [key in PathType]: string } = {
  "": "이집트 여행 도우미",
  restaurants: "맛집",
  tips: "여행 팁",
  tools: "여행 도구",
  tourism: "관광 정보"
};

const LayoutHeader = () => {
  const path = usePathname();
  const firstSegment = (path.split("/")[1] || "") as PathType;

  return (
    <header className="w-full h-14 bg-gold-primary sticky shadow-md top-0">
      <div className="flex text-white h-full items-center pl-4">
        {firstSegment !== "" && (
          <Link href="/" className="mr-2">
            <ArrowLeft />
          </Link>
        )}
        <div className="flex items-center space-x-2">
          <Pyramid />
          <h1 className="text-lg font-bold">{titleName[firstSegment]}</h1>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
