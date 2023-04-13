import React from 'react';
import Link from 'next/link';
import Typography from '../Typography';

const footerLinks = [
  {
    name: 'Support',
    href: '/',
  },
  {
    name: 'Rent a car',
    href: '/',
  },
  {
    name: 'Put your car for rent',
    href: '/',
  },
  {
    name: 'Contact',
    href: '/',
  },
  {
    name: 'Insurance Policy',
    href: '/',
  },
];

const AlterFooter = () => {
  return (
    <div className='mt-8 text-brandGray-300 bg-brandGray-200 pt-[40px] pb-[24px]'>
      <div className='w-[90%] mx-auto grid grid-cols-2 gap-x-[4px]  gap-y-[20px] lg:flex lg:flex-col lg:justify-center lg:gap-[132px]'>
        {footerLinks.map((footer) => {
          return (
            <Link key={footer.name} href={footer.name}>
              <Typography as='p' font='font-gordita-medium'>
                {' '}
                {footer.name}
              </Typography>
            </Link>
          );
        })}
      </div>
      <p className='text-center text-sm mt-[40px]'>
        ©2023 Oxtra Africa Inc. All rights reserved.
      </p>
    </div>
  );
};

export default AlterFooter;
