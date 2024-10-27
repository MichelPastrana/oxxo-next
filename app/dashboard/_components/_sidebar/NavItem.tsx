"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
    icon: ReactNode
    path: string
}

const NavItem = ({icon, path}: NavItemProps) => {
    const pathName = usePathname();
    return(
        <Link href={path} className="w-full flex items-center">
        <span className={pathName === path ? "bg-red-300 w-10/12 flex justify-center rounded-md transition-colors py-2 mx-2" : "w-10/12 py-2 mx-2"}>{icon}</span>
        </Link>
    )
}

export default NavItem;