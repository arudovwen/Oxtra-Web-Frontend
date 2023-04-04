import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';

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

const Completed = () => {
  const activePage = 'Rent a vehicle';
  const subPage = 'Completed';
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
                  item.name.toLowerCase() === subPage.toLowerCase()
                    ? 'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
                    : 'text-brandGray-100'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className='bg-white p-4 rounded-lg inline-flex text-4xl font-gordita-medium'>
          completed
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

export default Completed;
