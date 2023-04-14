import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoA from '../../public/assets/logoA.png';
import logoB from '../../public/assets/logoB.png';
import Typography from '../Typography';
import Button from '../Button';
import logo2 from '../../public/assets/Asset 3.png';
import Container from '../Container';

const navigation = [
  { name: 'Rent a vehicle', href: '/rent-a-vehicle' },
  { name: 'Put up your vehicle', href: '/put-up-your-vehicle' },
  { name: 'Company', href: '/company' },
  { name: 'FAQ', href: '/' },
  { name: 'Login', href: '/login' },
  { name: 'Sign Up', href: '/signup' },
];

interface NavigationProps {
  color: string;
  hover: string;
  buttonBg: string;
  buttonText: string;
  buttonHover: string;
  activePage: string;
  navBackground: string;
}

const Navigation = ({
  color,
  hover,
  buttonBg,
  buttonText,
  buttonHover,
  activePage,
  navBackground,
}: NavigationProps) => {
  return (
    <div className='hidden xl:flex justify-between items-center'>
      {navBackground === 'green' ? (
        <Link href='/' className='flex gap-[9.17px] items-center z-10 pt-6'>
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
              width={90}
              height={30}
              className='object-cover'
            />
          </div>
        </Link>
      ) : (
        <Link href='/' className='pt-6 z-10'>
          <Image
            src={logo2}
            alt='logo'
            width={111}
            height={48}
            className='object-cover'
          />
        </Link>
      )}

      <div className='flex gap-10 items-center pt-10 z-10'>
        {navigation.map((nav) => {
          const { name, href } = nav;
          if (name !== 'Sign Up') {
            return (
              <Typography key={name} as='p' font='font-gordita-regular'>
                <Link
                  href={href}
                  className={`${color}  pb-1 ${hover} duration-300 ${
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
    </div>
  );
};

export default Navigation;
