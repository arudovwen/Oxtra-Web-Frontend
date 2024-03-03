import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoA from '../../public/assets/logoA.png';
import logoB from '../../public/assets/logoB.png';
import Typography from '../Typography';
import Button from '../Button';
import logo2 from '../../public/assets/Asset 3.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { User } from '@/hooks/useAuth';
import { Dialog } from '@headlessui/react';
import { useAuth } from '@/hooks/useAuth';

interface NavigationProps {
  color: string;
  hover: string;
  buttonBg: string;
  buttonText: string;
  buttonHover: string;
  activePage: string;
  navBackground: string;
  children?: React.ReactNode;
  menuColor: string;
}

const navigation = [
  { name: 'Rent a car', href: '/rent-a-car' },
  { name: 'Sign up as a car owner', href: '/register-car' },
  { name: 'Company', href: '/company' },
  { name: 'FAQ', href: '/' },
];

const Navigation = ({
  color,
  hover,
  buttonBg,
  buttonText,
  buttonHover,
  activePage,
  navBackground,
  menuColor,
}: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user } = useAuth();

  const [theUser, setTheUser] = useState<User | null>();

  useEffect(() => {
    setTheUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
      <nav
        className='flex items-center pt-6 justify-between'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          {navBackground === 'green' ? (
            <Link href='/' className='flex gap-[9.17px] items-center z-10 '>
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
            <Link href='/' className='z-10'>
              <Image
                src={logo2}
                alt='logo'
                width={111}
                height={48}
                className='object-cover'
              />
            </Link>
          )}
        </div>
        <div className='hidden lg:flex lg:gap-x-[40px] z-10 mr-[40px]'>
          {navigation.map((item) => {
            return (
              <Typography as='p' key={item.name} font='font-gordita-regular'>
                <Link
                  href={item.href}
                  className={`${color}  pb-1 ${hover} duration-300 ${
                    activePage.toLowerCase() ===
                      item.name.toLocaleLowerCase() &&
                    'font-gordita-bold text-brandGreen-300'
                  }`}
                >
                  {item.name}
                </Link>
              </Typography>
            );
          })}
        </div>
        {theUser ? (
          <div className={`${buttonText} hidden lg:block z-10`}>
            <Button
              bg={buttonBg}
              link='/dashboard'
              hover={buttonHover}
              width={false}
              size='text-base'
            >
              Dashboard
            </Button>
          </div>
        ) : (
          <div className='hidden lg:flex items-center justify-end gap-x-[40px] z-10'>
            <Typography as='p' font='font-gordita-regular'>
              <Link
                href='/login'
                className={`${color}  pb-1 ${hover} duration-300 ${
                  activePage.toLowerCase() === 'login' &&
                  'font-gordita-bold text-brandGreen-300'
                }`}
              >
                Login
              </Link>
            </Typography>

            <div className={`${buttonText}`}>
              <Button
                bg={buttonBg}
                link='/signup'
                hover={buttonHover}
                width={false}
                size='text-base'
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}

        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <RiMenu3Fill
              className={`${menuColor} h-9 w-9`}
              aria-hidden='true'
            />
          </button>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='z-10'>
              <Image
                src={logo2}
                alt='logo'
                width={111}
                height={48}
                className='object-cover'
              />
            </Link>

            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <MdClose className='h-9 w-9' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => {
                  return (
                    <Typography
                      as='p'
                      key={item.name}
                      font='font-gordita-regular'
                    >
                      <Link
                        href={item.href}
                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </Link>
                    </Typography>
                  );
                })}
              </div>
              {theUser ? (
                <button className='w-full'>
                  <Link
                    href='/dashboard'
                    className='bg-brandGreen-300 rounded py-[16px] text-white font-gordita-medium w-full block'
                  >
                    Dashboard
                  </Link>
                </button>
              ) : (
                <div>
                  <div className='py-6'>
                    <Typography as='p' font='font-gordita-regular'>
                      <Link
                        href='/login'
                        className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      >
                        Login
                      </Link>
                    </Typography>
                  </div>

                  <button className='w-full'>
                    <Link
                      href='/signup'
                      className='bg-brandGreen-300 rounded py-[16px] text-white font-gordita-medium w-full block'
                    >
                      Sign Up
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navigation;
