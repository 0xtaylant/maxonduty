"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";



import NavbarItem from "./NavbarItem";
import Box from "./Box";
import { useMemo } from "react";
import Link from "next/link";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const pathname = usePathname();



  const routes = useMemo(() => [
    {
      label: 'OUTDOOR',
      href: '/outdoor',
      active: pathname === '/outdoor'
    },
    {
      
      label: 'INDOOR',
      href: '/indoor',
      active: pathname === '/indoor'
    },
    {
      
      label: 'VIDEOS',
      href: '/videos',
      active: pathname === '/videos'
    },
    {
      
      label: 'CANVAS',
      href: '/canvas',
      active: pathname === '/canvas'
    },
    {
      
      label: 'CONTACT',
      href: '/contact',
      active: pathname === '/contact'
    },
  ], [pathname]);

  return (
    <div 
      className={twMerge(`
        flex 
        flex-col
        h-full
        `,
        'h-[calc(100%-80px)]'
      )}
    >
      <div 
        className="
          hidden 
          md:flex 
          flex- 
          gap-y-2 
          bg-white 
          h-full 
        "
      >

<div className="w-screen flex flex-row justify-center items-center  py-4 ">
    <Link href="/">
            <img src="/maxlogo.svg" alt="Max Logo" className="h-16 w-auto" />
    </Link>
    <div className="flex ml-10 gap-x-10">
        {routes.map((item) => (
            <NavbarItem key={item.label} {...item} />
        ))}
    </div>
</div>

      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
}
 
export default Navbar;
