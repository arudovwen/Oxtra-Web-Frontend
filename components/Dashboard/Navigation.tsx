import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '../Typography';
import logo2 from '../../public/assets/Asset 3.png';
import Container from '../Container';
import { BsBellFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import classNames from 'classnames';

const navigation = [{ name: 'Rent a vehicle', href: '/rent-a-vehicle' }];

const iconClasses = classNames('text-brandGray-100 w-4 h-4 md:w-5 md:h-5');

const Navigation = () => {
  return (
    <Container>
      <div className='flex justify-between items-center '>
        <Link href='/' className='pt-6'>
          <Image
            src={logo2}
            alt='logo'
            width={111}
            height={48}
            className='object-cover'
          />
        </Link>

        <div className='flex gap-2 md:gap-10 items-center pt-10 z-10'>
          {navigation.map((nav) => {
            const { name, href } = nav;
            return (
              <Typography key={name} as='p' font='font-gordita-regular'>
                <Link href={href}>
                  {name}
                </Link>
              </Typography>
            );
          })}
          <span>
            <BsBellFill className={iconClasses} />
          </span>
          <span>
            <CgProfile className={iconClasses} />
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
