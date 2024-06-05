"use client";
import React from "react";
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Use hooks",
      link: "/description/usehook",
    },
    {
      text: "Next UI",
      link: "/description/nextui",
    },
    {
      text: "Zustand",
      link: "/description/zustand",
    },
    {
      text: "React Hook Form",
      link: "/description/react-hook-form",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarItem isActive={pathname === "/"}>
          <Link
            href="/"
            color={pathname === "/" ? "primary" : "foreground"}
          >
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        <NavbarItem isActive={pathname === "/description/usehook"}>
          <Link
            color={pathname === "/description/usehook" ? "primary" : "foreground"}
            href="/description/usehook"
          >
            Use hooks
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/description/nextui"}>
          <Link
            color={pathname === "/description/nextui" ? "primary" : "foreground"}
            href="/description/nextui"
          >
            Next UI
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/description/zustand"}>
          <Link
            color={pathname === "/description/zustand" ? "primary" : "foreground"}
            href="/description/zustand"
          >
            Zustand
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/description/react-hook-form"}>
          <Link
            color={pathname === "/description/react-hook-form" ? "primary" : "foreground"}
            href="/description/react-hook-form"
          >
            React Hook Form
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={item.link === pathname ? "primary" : "foreground"}
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
