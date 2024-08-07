import { Box, Settings, Tag, Tags, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonMenu, { ButtonMenuProps } from "@/components/button/button-menu";

const ListMenu: ButtonMenuProps[] = [
  {
    href: "/dashboard/produk",
    icon: <Box />,
    title: "Produk",
  },
  {
    href: "/dashboard/kategori",
    icon: <Tag />,
    title: "Kategori",
  },
  {
    href: "/dashboard/user",
    icon: <Users />,
    title: "User",
  },
  {
    href: "/dashboard/setting",
    icon: <Settings />,
    title: "Setting",
  },
];

function Sidebar() {
  return (
    <aside className="bg-blue-950 w-[250px] text-white flex flex-col">
      <Link
        href="/dashboard"
        className="h-[70px] w-full text-3xl font-bold text-center py-4 px-2  border-b-[1px] border-slate-100/50"
      >
        Admin
      </Link>
      <nav className="p-4">
        <ul className="space-y-4">
          {ListMenu.map((menu) => {
            return (
              <li key={menu.href}>
                <ButtonMenu
                  href={menu.href}
                  icon={menu.icon}
                  title={menu.title}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
