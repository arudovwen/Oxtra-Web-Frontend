import React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const sideNav = [
  { name: "Rent a car", href: "/dashboard" },
  { name: "Courier service", href: "/dashboard/courier-service" },
  { name: "Lease vehicle", href: "/dashboard/lease-a-vehicle" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Password", href: "/dashboard/password" },
];

interface SideNavProps {
  activePage: string;
}

const SideNav = ({ activePage }: SideNavProps) => {
  const { logout } = useAuth();
  return (
    <div className="flex  lg:flex-col gap-[60px]   font-gordita-regular overflow-scroll lg:overflow-auto">
      <div className="flex lg:flex-col gap-6 items-center lg:items-start">
        {sideNav.map((nav) => {
          return (
            <Link
              href={nav.href}
              key={nav.name}
              className={`${
                activePage.toLocaleLowerCase() ===
                  nav.name.toLocaleLowerCase() &&
                "text-[#102214] font-gordita-medium bg-[#DDEEE0] rounded-lg py-2 lg:pl-3 px-3  lg:w-[152px]"
              } text-[#666666] text-[14px] leading-[20px] pl-3 whitespace-nowrap `}
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
      <span
        className="lg:pl-3 py-2 bg-[#FFDBDB] text-[#660000] font-gordita-regular cursor-pointer px-3 lg:w-[152px] rounded-lg
"
        onClick={logout}
      >
        Logout
      </span>
    </div>
  );
};

export default SideNav;
