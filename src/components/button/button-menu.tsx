import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export type ButtonMenuProps = { href: string; icon: ReactNode; title: string };

function ButtonMenu(props: ButtonMenuProps) {
  const pathname = usePathname();

  return (
    <Link
      href={props.href}
      className={cn(
        " hover:bg-white w-full text-black rounded-lg p-2 flex gap-x-2 border-[1px] border-white/50",
        pathname.includes(props.href)
          ? "bg-slate-200"
          : "text-white  hover:text-black "
      )}
    >
      {props.icon}
      {props.title}
    </Link>
  );
}

export default ButtonMenu;
