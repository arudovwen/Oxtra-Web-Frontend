import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoA from '../../public/assets/logoA.png';
import logoB from '../../public/assets/logoB.png';
import Typography from '../Typography';

const navigation = [
  { name: 'Rent a vehicle', href: '/' },
  { name: 'Put your vehicle for rent', href: '/' },
  { name: 'FAQ', href: '/' },
  { name: 'Login', href: '/' },
  { name: 'Sign Up', href: '/' },
];

const Navigation = () => {
  return (
    <div className='flex justify-between items-center '>
      <div className='flex gap-[9.17px] items-center pt-6'>
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
      </div>
      <div className='flex gap-10 pt-10'>
        {navigation.map((nav) => {
          const { name, href } = nav;
          return (
            <div key={name} className='text-white'>
              <Typography as='xsmall'>
                <Link href={href}>{name}</Link>
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
