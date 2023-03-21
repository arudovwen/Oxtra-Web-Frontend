import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoA from '../../public/assets/logoA.png';
import logoB from '../../public/assets/logoB.png';
import Typography from '../Typography';
import Button from '../Button';

const navigation = [
  { name: 'Rent a vehicle', href: '/' },
  { name: 'Put up your vehicle', href: '/' },
  { name: 'Company', href: '/company' },
  { name: 'FAQ', href: '/' },
  { name: 'Login', href: '/' },
  { name: 'Sign Up', href: '/' },
];

interface NavigationProps {
  color: string;
  hover: string;
  buttonBg: string;
  buttonText: string;
  buttonHover: string;
  activePage: string;
}

const Navigation = ({
  color,
  hover,
  buttonBg,
  buttonText,
  buttonHover,
  activePage,
}: NavigationProps) => {
  return (
    <div className='flex justify-between items-center '>
      <Link href='/' className='flex gap-[9.17px] items-center pt-6'>
        <div>
          <Image
            src={logoA}
            alt='logo'
            className='object-cover'
            width={30}
            height={30}
          />
        </div>
        <div>
          <Image
            src={logoB}
            alt='logo'
            width={111}
            height={48}
            className='object-cover'
          />
        </div>
      </Link>
      <div className='flex gap-10 items-center pt-10 z-10'>
        {navigation.map((nav) => {
          const { name, href } = nav;
          if (name !== 'Sign Up') {
            return (
              <Typography as='xsmall' key={name} font='font-gordita-regular'>
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
                <Typography as='xsmall' font='font-gordita-regular'>
                  <Button bg={buttonBg} link='/' hover={buttonHover}>
                    {name}
                  </Button>
                </Typography>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Navigation;
