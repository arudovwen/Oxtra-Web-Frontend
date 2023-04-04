import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';
import honda from '../../public/assets/honda.png';
import Image from 'next/image';
import classNames from 'classnames';
import { MdArrowForwardIos } from 'react-icons/md';
import Button from '@/components/Button';
import Link from 'next/link';

const rowClasses = classNames('flex items-baseline mb-[20px] justify-between');

const contentClasses = classNames(
  'text-brandGray-300 font-gordita-medium text-[12px] leading-[12px]'
);

const infoClasses = classNames(
  'text-[12px] leading-[12px] font-gordita-regular text-brandGray-100'
);

const nav = [
  { name: 'Pending', link: '/dashboard' },
  { name: 'Completed', link: '/dashboard/rent-a-vehicle/completed' },
];

const RentVehicle = () => {
  const activePage = 'Rent a vehicle';
  const subPage = 'Pending';
  return (
    <DashboardLayout activePage={activePage}>
      <div className='bg-brandGray-200 p-8 rounded-xl w-[840px]'>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Rent a car
          </Typography>
        </div>
        <div className='flex mb-8 gap-[91px]  font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          {nav.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.link}
                className={` px-5 pb-2.5 ${
                  item.name === subPage
                    ? 'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
                    : 'text-brandGray-100'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className='bg-white p-4 rounded-lg inline-flex'>
          <div className='mr-6'>
            <Image
              src={honda}
              width={120}
              height={88}
              alt='car'
              className='rounded-xl mb-3'
            />
            <span className='text-[12px] leading-[12px] font-gordita-medium'>
              Honda CR-V (2015)
            </span>
          </div>
          <div className='w-[200px] mr-[54px]'>
            <div className={rowClasses}>
              <span className={infoClasses}>Trip date:</span>
              <span className={contentClasses}>24/2/2023</span>
            </div>
            <div className={rowClasses}>
              <span className={infoClasses}>Cost:</span>
              <span className={contentClasses}>N35,000</span>
            </div>
            <div className={rowClasses}>
              <span className={infoClasses}>Duration:</span>
              <span className={contentClasses}>1 Day</span>
            </div>
            <div className='flex items-baseline justify-between'>
              <span className={infoClasses}>Payment Status:</span>
              <span className='text-[12px] leading-[12px] font-gordita-medium text-brandGreen-300'>
                Paid
              </span>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <span className='text-[10px] leading-[10px] text-[#E59400] bg-[#FFF6E5] py-[9px] px-[12px] rounded-lg '>
              Pending
            </span>
            <span className='text-[10px] flex font-gordita-medium gap-[9px] leading-[10px] text-brandGray-100'>
              View Details{' '}
              <span>
                <MdArrowForwardIos />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className='mt-8 max-w-[480px] mx-auto'>
        <Button
          bg='bg-brandGreen-300'
          hover='hover:bg-brandGray-200'
          textColor='text-white'
          width={true}
          size='text-sm'
        >
          Rent a car
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default RentVehicle;
