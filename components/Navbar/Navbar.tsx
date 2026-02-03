"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
// import Search from "../Search/Search";
// import Notification from "../Notification/Notification";
// import Settings from "../Settings/Settings";
// import SignOut from "../SignOut/SignOut";

type Props = {};

const Navbar = (props: Props) => {
  const pathName = usePathname();
  const pageName = pathName.replace("/", "");

  return (
    <header className="w-full border-b border-gray-200 bg-white top-0 left-0 z-10 sticky">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/rccg_logo.svg"
            alt="RCCG Logo"
            width={80}
            height={80}
          />
          <div className="leading-tight">
            <p className="text-lg font-bold text-gray-800">
              THE REDEEMED CHRISTIAN CHURCH OF GOD
            </p>
            <p className="text-gray-800 font-semibold">PROVINCE: LP69</p>
          </div>
        </div>

        <div className="hidden md:flex w-1/3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              placeholder="Search something here"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 text-sm text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer border-r-gray-200">
            <Bell className="size-6 text-primary-500" />
            <span className="absolute -right-1 -top-1 size-4 rounded-full bg-red-500 text-[10px] font-semibold text-white flex items-center justify-center">
              9
            </span>
          </div>

          {/* User */}
          <div className="flex items-center gap-2">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary-100 font-bold">
              AI
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-medium text-gray-800">Ayoola Iyiola</p>
              <p className="text-xs text-gray-800">Admin</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-800" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
