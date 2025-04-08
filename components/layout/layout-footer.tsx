import { Compass, Home, Lightbulb, PenTool, Utensils } from "lucide-react";
import NavLink from "../NavLink";

const menuName = [
  { name: "홈", path: "/", icon: <Home className="w-5 h-5 mb-1" /> },
  { name: "관광", path: "/tourism", icon: <Compass className="w-5 h-5 mb-1" /> },
  { name: "도구", path: "/tools", icon: <PenTool className="w-5 h-5 mb-1" /> },
  { name: "맛집", path: "/restaurants", icon: <Utensils className="w-5 h-5 mb-1" /> },
  { name: "팁", path: "/tips", icon: <Lightbulb className="w-5 h-5 mb-1" /> }
];

const LayoutFooter = () => {
  return (
    <nav className="sticky bg-white bottom-0 left-0 right-0 border-t shadow-lg z-10">
      <ul className="flex ">
        {menuName.map((menu) => (
          <li key={menu.name} className="py-2 flex-1 text-gray-500">
            <NavLink
              href={menu.path}
              className="flex flex-col items-center"
              activeClassName="text-gold-primary"
              end
            >
              {menu.icon}
              <span className="text-xs">{menu.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LayoutFooter;
