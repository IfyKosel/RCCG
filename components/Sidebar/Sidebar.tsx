"use client";
import Image from "next/image";
// import {
//   Dashboard,
//   Transaction,
//   Merchant,
//   Permission,
//   Settlement,
// } from "../Icons/Icons";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import classNames from "classnames";
import { ReactNode } from "react";
import { SidebarItemProps, SidebarProps } from "@/types/types";
import classNames from "classnames";
import { ClipboardMinus, Grid2x2 } from "lucide-react";
// import Settings from "../Settings/Settings";
// import Notification from "../Notification/Notification";
// import SignOut from "../SignOut/SignOut";

type NavbarProps = {
  navTitle: string;
  component: ReactNode;
};

const Sidebar = ({ display, displaymd }: SidebarProps) => {
  const sideBarItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Grid2x2 />,
    },
    {
      title: "Reports",
      href: "/reports",
      icon: <ClipboardMinus />,
    },
    {
      title: "Cordinator",
      href: "/cordinator",
      //   icon: Merchant,
    },
    {
      title: "Analytics",
      href: "/analytics",
      //   icon: Permission,
    },
  ];

  //   const navBarItems = [
  //     {
  //       navTitle: "Notification",
  //       component: <Notification />,
  //     },
  //     {
  //       navTitle: "Settings",
  //       component: <Settings />,
  //     },
  //     {
  //       navTitle: "Sign Out",
  //       component: <SignOut />,
  //     },
  //   ];

  return (
    <div
      className={`sticky top-40 left-0 h-screen bg-white border border-b-gray-200 ${display} md:${displaymd} `}
    >
      <div className="h-full w-52 sm:w-64 px-4">
        <div className="flex flex-col item-center justify-center overflow-hidden bg-[#F8F9FA]">
          <div className="flex flex-col mt-3">
            {sideBarItems.map((item, index) => {
              return <SidebarItem key={index} item={item} />;
            })}
          </div>
          {/* <div className="flex flex-col mt-4 md:hidden">
            {navBarItems.map((item, index) => {
              return <NavbarItem key={index} item={item} />;
            })}
          </div> */}
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
        "rounded-[10px]",
        "group",
        {
          "bg-white text-black": isActive,
          "bg-transparent text-[#8A92A6] hover:bg-slate-100": !isActive,
        },
      )}
    >
      <Link
        href={item.href}
        className="flex items-center gap-2 py-2 px-8 sm:px-10 w-full"
      >
        <span
          className={classNames("p-1", "sm:p-[6px]", "rounded-lg", {
            "bg-[#091F8E]": isActive,
            "bg-white": !isActive,
          })}
        >
          {/* <item.icon color={isActive ? "white" : "#091F8E"} /> */}
        </span>
        <span className="text-sm sm:text-base font-medium">{item.title}</span>
      </Link>
    </button>
  );
};

const NavbarItem = ({ item }: { item: NavbarProps }) => {
  return (
    <div className="flex items-center my-1 rounded-[10px] bg-transparent text-[#8A92A6] hover:bg-slate-100">
      <div className="flex items-center px-8 sm:px-10 w-full">
        <span className="p-1 sm:p-[6px] rounded-lg flex items-center gap-3">
          {item.component}
          <span className="text-sm sm:text-base font-medium">
            {item.navTitle}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
