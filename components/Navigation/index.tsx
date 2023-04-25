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

import { useAuth } from '@/hooks/useAuth';

// const navigation = [
//   { name: 'Rent a vehicle', href: '/rent-a-vehicle' },
//   { name: 'Put up your vehicle', href: '/put-up-your-vehicle' },
//   { name: 'Company', href: '/company' },
//   { name: 'FAQ', href: '/' },
// ];

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

// const NavItems = ({
//   color,
//   hover,
//   activePage,
//   children,
//   navBackground,
// }: NavigationProps) => {
//   return (
//     <div className='hidden xl:flex justify-between items-center'>
//       {' '}
//       {navBackground === 'green' ? (
//         <Link href='/' className='flex gap-[9.17px] items-center z-10 pt-6'>
//           <div>
//             <Image
//               src={logoA}
//               alt='logo'
//               className='object-cover'
//               width={25}
//               height={25}
//             />
//           </div>
//           <div>
//             <Image
//               src={logoB}
//               alt='logo'
//               width={90}
//               height={30}
//               className='object-cover'
//             />
//           </div>
//         </Link>
//       ) : (
//         <Link href='/' className='pt-6 z-10'>
//           <Image
//             src={logo2}
//             alt='logo'
//             width={111}
//             height={48}
//             className='object-cover'
//           />
//         </Link>
//       )}
//       <div className='flex gap-10 items-center pt-10 z-10'>
//         {navigation.map((nav) => {
//           const { name, href } = nav;
//           return (
//             <Typography key={name} as='p' font='font-gordita-regular'>
//               <Link
//                 href={href}
//                 className={`${color}  pb-1 ${hover} duration-300 ${
//                   activePage.toLowerCase() === name.toLocaleLowerCase() &&
//                   'font-gordita-bold text-brandGreen-300'
//                 }`}
//               >
//                 {name}
//               </Link>
//             </Typography>
//           );
//         })}
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// const Navigation = ({
//   color,
//   hover,
//   buttonBg,
//   buttonText,
//   buttonHover,
//   activePage,
//   navBackground,
// }: NavigationProps) => {
//   const { user } = useAuth();

//   return (
//     <div className=''>
//       <NavItems
//         navBackground={navBackground}
//         color={color}
//         hover={hover}
//         activePage={activePage}
//         buttonHover={buttonHover}
//         buttonText={buttonText}
//         buttonBg={buttonBg}
//       >
//         {user ? (
//           <div className={`${buttonText}`}>
//             <Button
//               bg={buttonBg}
//               link='/dashboard'
//               hover={buttonHover}
//               width={false}
//               size='text-base'
//             >
//               Dashboard
//             </Button>
//           </div>
//         ) : (
//           <div className='flex items-center gap-[40px]'>
//             <Typography as='p' font='font-gordita-regular'>
//               <Link
//                 href='login'
//                 className={`${color}  pb-1 ${hover} duration-300 ${
//                   activePage.toLowerCase() === 'login' &&
//                   'font-gordita-bold text-brandGreen-300'
//                 }`}
//               >
//                 Login
//               </Link>
//             </Typography>
//             <div className={`${buttonText}`}>
//               <Button
//                 bg={buttonBg}
//                 link='signup'
//                 hover={buttonHover}
//                 width={false}
//                 size='text-base'
//               >
//                 Sign Up
//               </Button>
//             </div>
//           </div>
//         )}
//       </NavItems>
//     </div>
//   );
// };

// export default Navigation;

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Rent a vehicle', href: '/rent-a-vehicle' },
  { name: 'Put up your vehicle', href: '/put-up-your-vehicle' },
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

  return (
    <header className=''>
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
          {navigation.map((item) => (
            <Typography key={item.name} as='p' font='font-gordita-regular'>
              <Link
                href={item.href}
                className={`${color}  pb-1 ${hover} duration-300 ${
                  activePage.toLowerCase() === item.name.toLocaleLowerCase() &&
                  'font-gordita-bold text-brandGreen-300'
                }`}
              >
                {item.name}
              </Link>
            </Typography>
          ))}
        </div>
        {user ? (
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
                href='login'
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
                link='signup'
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
              className={`${menuColor} h-6 w-6`}
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
          <div className='flex items-center gap-x-6'>
            <Link href='/' className='z-10'>
              <Image
                src={logo2}
                alt='logo'
                width={111}
                height={48}
                className='object-cover'
              />
            </Link>
            <Link
              href='/signup'
              className='ml-auto rounded-md bg-brandGreen-300 px-3 py-2 text-sm font-gordita-regular text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandGreen-300'
            >
              Sign up
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <MdClose className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navigation;
