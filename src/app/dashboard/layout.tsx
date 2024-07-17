"use client";

import { ReactNode } from "react";
import { Box, Tag, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="w-screen h-screen bg-slate-50 flex">
      {/* sidebar */}
      <aside className="bg-blue-950 w-[250px] text-white flex flex-col">
        <Link
          href="/dashboard"
          className="h-[70px] w-full text-3xl font-bold text-center py-4 px-2  border-b-[1px] border-slate-100/50"
        >
          Admin
        </Link>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/dashboard/produk"
                className={cn(
                  " hover:bg-white w-full text-black rounded-lg p-2 flex gap-x-2 border-[1px] border-white/50",
                  pathname.includes("/dashboard/produk")
                    ? "bg-slate-200"
                    : "text-white  hover:text-black "
                )}
              >
                <Box />
                Produk
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/kategori"
                className={cn(
                  " hover:bg-white w-full text-black rounded-lg p-2 flex gap-x-2 border-[1px] border-white/50",
                  pathname.includes("/dashboard/kategori")
                    ? "bg-slate-200"
                    : "text-white  hover:text-black "
                )}
              >
                <Tag />
                Kategori
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/user"
                className={cn(
                  " hover:bg-white w-full text-black rounded-lg p-2 flex gap-x-2 border-[1px] border-white/50",
                  pathname.includes("/dashboard/user")
                    ? "bg-slate-200"
                    : "text-white  hover:text-black "
                )}
              >
                <Users />
                User
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      {/* main */}
      <div className="w-full">
        {/* topbar */}
        <div className="h-[50px] bg-blue-900 w-full"></div>
        {/* content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

export default layout;
