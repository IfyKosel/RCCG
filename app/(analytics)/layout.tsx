import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import type { Metadata } from "next";

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
        {/* <Sidebar display={"hidden"} displaymd={"flex"} /> */}
        <div className="flex flex-7">
          <Sidebar display={"hidden"} displaymd={"flex"} />
          {/* <Navbar /> */}
          <div className=" w-full bg-[#FAFAFA] min-h-[88vh] p-5">
            {children}
          </div>
        </div>
      </main>
    </section>
  );
}
