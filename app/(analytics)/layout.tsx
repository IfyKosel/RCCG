import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "RCCG",
  description: "RCCG Admin control panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="w-full">
        <Navbar />
        <div className="flex flex-7">
          <Sidebar display={"hidden"} displaymd={"flex"} />
          <div className=" w-full bg-primary-50 min-h-[calc(100vh-97px)] p-5">
            {children}
          </div>
        </div>
      </main>
    </section>
  );
}
