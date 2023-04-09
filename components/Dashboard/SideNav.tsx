import React from 'react';
import Link from 'next/link';

const sideNav = [
  { name: 'Rent a vehicle', href: '/dashboard' },
  { name: 'Courier service', href: '/dashboard/courier-service' },
  { name: 'Lease vehicle', href: '/dashboard/lease-a-vehicle' },
  { name: 'Profile', href: '/dashboard/profile' },
  { name: 'Password', href: '/dashboard/password' },
];

interface SideNavProps {
  activePage: string;
}

const SideNav = ({ activePage }: SideNavProps) => {
  return (
    <div className='flex flex-col gap-[60px] font-gordita-regular'>
      <div className='flex flex-col gap-6'>
        {sideNav.map((nav) => {
          return (
            <Link
              href={nav.href}
              key={nav.name}
              className={`${
                activePage.toLocaleLowerCase() ===
                  nav.name.toLocaleLowerCase() &&
                'text-[#102214] font-gordita-medium bg-[#DDEEE0] rounded-lg py-2 pl-3 w-[152px]'
              } text-[#666666] text-[14px] leading-[20px] pl-3 `}
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
      <span
        className='pl-3 py-2 bg-[#FFDBDB] text-[#660000] font-gordita-regular w-[152px] rounded-lg
'
      >
        Logout
      </span>
    </div>
  );
};

export default SideNav;
