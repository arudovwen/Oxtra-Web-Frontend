import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoA from '../../public/assets/logoA.png';
import logoB from '../../public/assets/logoB.png';
import Typography from '../Typography';
import Button from '../Button';
import logo2 from '../../public/assets/Asset 3.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

import Container from '../Container';

interface CollapseNavProps {
  color: string;
  hover: string;
  buttonBg: string;
  buttonText: string;
  buttonHover: string;
  activePage: string;
  navBackground: string;
  menuColor: string;
}

const navigation = [
  { name: 'Rent a vehicle', href: '/rent-a-vehicle' },
  { name: 'Put up your vehicle', href: '/put-up-your-vehicle' },
  { name: 'Company', href: '/company' },
  { name: 'FAQ', href: '/' },
  { name: 'Login', href: '/login' },
  { name: 'Sign Up', href: '/signup' },
];

const CollapseNav = ({
  color,
  hover,
  buttonBg,
  buttonText,
  buttonHover,
  activePage,
  navBackground,
  menuColor,
}: CollapseNavProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='xl:hidden  flex items-baseline justify-between text-white'>
      {navBackground === 'green' ? (
        <Link href='/' className='flex gap-[9.17px] items-baseline z-10 pt-6'>
          <div>
            <Image
              src={logoA}
              alt='logo'
              className='object-cover'
              width={25}
              height={25}
            />
          </div>
          <div>
            <Image
              src={logoB}
              alt='logo'
              width={80}
              height={50}
              className='object-cover'
            />
          </div>
        </Link>
      ) : (
        <Link href='/' className='pt-6 z-10'>
          <Image
            src={logo2}
            alt='logo'
            width={80}
            height={50}
            className='object-cover'
          />
        </Link>
      )}

      <div>
        <RiMenu3Fill
          className={`${menuColor} w-[32px] h-[32px] `}
          onClick={() => setOpen(true)}
        />
      </div>

      {open && (
        <div className='flex fixed top-0 right-0 left-0 bottom-0 flex-col bg-black gap-10 p-[19px] z-50'>
          <div className='flex items-baseline justify-between'>
            <Link href='/' className='pt-6 z-50'>
              <Image
                src={logo2}
                alt='logo'
                width={80}
                height={50}
                className='object-cover'
              />
            </Link>
            <div className='z-50'>
              <AiOutlineClose
                className='w-[32px] h-[32px]'
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
          {navigation.map((nav) => {
            const { name, href } = nav;
            if (name !== 'Sign Up') {
              return (
                <Typography key={name} as='p' font='font-gordita-regular'>
                  <Link
                    href={href}
                    className={`${color}  pb-1 z-50 ${hover} duration-300 ${
                      activePage.toLowerCase() === name.toLocaleLowerCase() &&
                      'font-gordita-bold text-brandGreen-300'
                    }`}
                  >
                    {name}
                  </Link>
                </Typography>
              );
            } else {
              return (
                <div key={name} className={`${buttonText}`}>
                  <Button
                    bg={buttonBg}
                    link={href}
                    hover={buttonHover}
                    width={false}
                    size='text-base'
                  >
                    {name}
                  </Button>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default CollapseNav;
