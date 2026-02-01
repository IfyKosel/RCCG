"use client";
import React from "react";
import { usePathname } from "next/navigation";
// import Search from "../Search/Search";
// import Notification from "../Notification/Notification";
// import Settings from "../Settings/Settings";
// import SignOut from "../SignOut/SignOut";

type Props = {};

const Navbar = (props: Props) => {
  const pathName = usePathname();
  const pageName = pathName.replace("/", "");

  return (
    <section className="bg-[#F8F9FA] h-18 sticky top-0 z-10 px-5 md:px-0">
      <div className="flex-row-reverse md:flex-row flex md:justify-between items-center h-full gap-5 relative">
        <div className="flex flex-col text-xs sm:text-sm md:text-base text-end md:text-start">
          <p className="text-[#8A92A6]">
            Pages <span className="text-black capitalize">/ {pageName}</span>
          </p>
          <h2 className="text-black font-bold capitalize">{pageName}</h2>
        </div>

        <div className="flex gap-8 lg:gap-20">
          {/* <Search /> */}
          <div className="hidden md:flex items-center gap-3 md:mr-4">
            {/* <Notification />
            <Settings />
            <SignOut /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
