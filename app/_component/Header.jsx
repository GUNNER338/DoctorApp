import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/",
    },
    {
      id: 3,
      name: "Contact us",
      path: "/",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-md sticky">
      <div className="flex items-center gap-10 ">
        <Image src="/logo.svg" alt="logo" width={100} height={80} />
        <ul className="md:flex gap-8 hidden ">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.path} className="hover:text-primary font-medium scale-105 transition-all ease-in-out">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
