"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
  SidebarItemProps,
  SidebarProps,
  SideBottomItemProps,
} from "@/types/types";
import classNames from "classnames";
import {
  ChartLine,
  ClipboardMinus,
  Grid2x2,
  LogOut,
  Settings,
  Users,
} from "lucide-react";

const Sidebar = ({ display, displaymd }: SidebarProps) => {
  const sideBarItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Grid2x2,
    },
    {
      title: "Reports",
      href: "/reports",
      icon: ClipboardMinus,
    },
    {
      title: "Cordinator",
      href: "/cordinator",
      icon: Users,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: ChartLine,
    },
  ];

  const sidebottomItems = [
    {
      title: "Settings",
      icon: Settings,
    },
    {
      title: "Logout",
      icon: LogOut,
    },
  ];

  return (
    <div
      className={`sticky left-0 bottom-0 h-[calc(100vh-97px)] bg-white border-r border-gray-200 ${display} md:${displaymd} `}
    >
      <div className="h-full w-52 sm:w-64 px-4">
        <div className="flex flex-col item-center justify-between h-full overflow-hidden py-5">
          <div className="flex flex-col">
            {sideBarItems.map((item, index) => {
              return <SidebarItem key={index} item={item} />;
            })}
          </div>
          <div className="flex flex-col">
            {sidebottomItems.map((item, index) => {
              return <SidebottomItem key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ item }: { item: SidebarItemProps }) => {
  const pathName = usePathname();
  const isActive = pathName === item.href;

  return (
    <button
      className={classNames(
        "flex",
        "items-center",
        "cursor-pointer",
        "my-1",
        "rounded-sm",
        "group",
        {
          "text-primary-50 bg-primary-500": isActive,
          "bg-transparent text-primary-900 hover:bg-primary-200": !isActive,
        },
      )}
    >
      <Link
        href={item.href}
        className="flex items-center gap-3 py-2 px-8 sm:px-10 w-full"
      >
        <item.icon color={isActive ? "white" : "#0B042B"} />
        <span className="text-lg sm:text-base font-medium">{item.title}</span>
      </Link>
    </button>
  );
};

const SidebottomItem = ({ item }: { item: SideBottomItemProps }) => {
  return (
    <button
      className={classNames(
        "flex",
        "items-center",
        "cursor-pointer",
        "my-1",
        "rounded-sm",
        "group",
        "text-primary-900",
        "hover:bg-primary-200",
      )}
    >
      <div className="flex items-center gap-3 py-2 px-8 sm:px-10 w-full">
        <item.icon color={"#0B042B"} />
        <span className="text-lg sm:text-base font-medium">{item.title}</span>
      </div>
    </button>
  );
};

// const NavbarItem = ({ item }: { item: NavbarProps }) => {
//   return (
//     <div className="flex items-center my-1 rounded-[10px] bg-transparent text-[#8A92A6] hover:bg-slate-100">
//       <div className="flex items-center px-8 sm:px-10 w-full">
//         <span className="p-1 sm:p-1.5 rounded-lg flex items-center gap-3">
//           {item.component}
//           <span className="text-sm sm:text-base font-medium">
//             {item.navTitle}
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// };

export default Sidebar;
