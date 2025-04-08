import Link from "next/link";
import React from "react";

const TravelTipsLinkCard = () => {
  return (
    <section className="mt-6">
      <Link
        href={"/tips"}
        className="p-4 h-32 bg-blue-primary flex flex-col justify-center rounded-xl text-white bg-gradient-to-r from-black/60 to-transparent"
      >
        <h3 className="text-lg font-bold">여행 팁 모음</h3>
        <p className="text-sm">이집트 여행을 위한 유용한 정보</p>
      </Link>
    </section>
  );
};

export default TravelTipsLinkCard;
