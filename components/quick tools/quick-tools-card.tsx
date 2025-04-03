import { ElementType } from "react";
import Link from "next/link";
import { Card } from "../ui/card";

interface QuickToolsCardProps {
  title: string;
  Icon: ElementType;
  color: string;
  href: string;
}

const QuickToolsCard = ({ href, title, Icon, color }: QuickToolsCardProps) => {
  return (
    <Link href={href}>
      <Card className="flex p-3 justify-center items-center shadow-sm gap-0 hover:shadow-md transition-shadow">
        <div className={"w-10 h-10 flex mb-2 justify-center items-center rounded-full " + color}>
          <Icon />
        </div>
        <span className="text-xs text-center">{title}</span>
      </Card>
    </Link>
  );
};

export default QuickToolsCard;
