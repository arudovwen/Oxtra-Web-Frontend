import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';
import classNames from 'classnames';
import { MdArrowForwardIos } from 'react-icons/md';
import { FiCalendar } from 'react-icons/fi';
import { TbTruck } from 'react-icons/tb';
import Button from '@/components/Button';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiCurrentLocation } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const rowClasses = classNames(
  'flex flex-col items-baseline mb-[30px] justify-between'
);

const headingClasses = classNames(
  'text-brandGray-300 font-gordita-medium text-[12px] mb-2 leading-[12px]'
);

const infoClasses = classNames(
  'text-[12px] leading-[12px] font-gordita-regular text-brandGray-100'
);

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white p-4 rounded-lg flex justify-between w-[517px]'>
      <div className='flex flex-col justify-between'>
        <TbTruck className='bg-brandGreen-300 p-[8px] text-white rounded-full w-[40px] h-[40px]' />

        <span className='text-[12px] text-[#666666] flex gap-2  leading-[12px] font-gordita-medium'>
          <FiCalendar /> 24/2/2023
        </span>
      </div>
      <div className='relative '>
        <div className={rowClasses}>
          <span className={headingClasses}>Pick-up address</span>
          <span className={infoClasses}>
            12, ajifoluke avenue, Lekki - Lekki, Lagos state
          </span>
        </div>
        <BiCurrentLocation className='text-brandGreen-300 absolute top-[3px] left-[-24px]' />
        <div className='border-t-2 border-brandGreen-300  w-[38px] top-[40px] rotate-90 absolute left-[-35px]'></div>
        <HiOutlineLocationMarker className=' absolute top-[63px] left-[-24px]' />
        <div className={`${rowClasses}`}>
          <span className={headingClasses}>Drop-off adress</span>
          <span className={infoClasses}>
            12, ajifoluke avenue, Lekki - Lekki, Lagos state
          </span>
        </div>
      </div>
      <div className='flex items-end justify-between flex-col '>
        {children}

        <div className='text-[10px] flex font-gordita-medium gap-[9px] leading-[10px] text-brandGray-100'>
          View Details{' '}
          <span>
            <MdArrowForwardIos />
          </span>
        </div>
      </div>
    </div>
  );
};

const CardMobile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white p-4 rounded-lg flex flex-col justify-between '>
      <div className='flex justify-between items-center mb-[16px]'>
        <TbTruck className='bg-brandGreen-300 p-[8px] text-white rounded-full w-[40px] h-[40px]' />
        {children}
      </div>
      <div className='flex gap-3'>
        <div className='relative '>
          <BiCurrentLocation className='text-brandGreen-300' />
          <div className='border-t-2 border-brandGreen-300  w-[38px] absolute top-[45px] right-[-11px] rotate-90'></div>
          <HiOutlineLocationMarker className='absolute top-[80px] ' />
        </div>
        <div>
          <div className={rowClasses}>
            <span className={headingClasses}>Pick-up address</span>
            <span className={infoClasses}>
              12, ajifoluke avenue, Lekki - Lekki, Lagos state
            </span>
          </div>

          <div className={`${rowClasses}`}>
            <span className={headingClasses}>Drop-off adress</span>
            <span className={infoClasses}>
              12, ajifoluke avenue, Lekki - Lekki, Lagos state
            </span>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <span className='text-[12px] text-[#666666] flex gap-2  leading-[12px] font-gordita-medium'>
          <FiCalendar /> 24/2/2023
        </span>

        <div className='text-[10px] flex font-gordita-medium gap-[9px] leading-[10px] text-brandGray-100'>
          View Details{' '}
          <span>
            <MdArrowForwardIos />
          </span>
        </div>
      </div>
    </div>
  );
};

const CourierService = () => {
  const activePage = 'Courier service';

  const [pending, setPending] = useState(true);

  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push('/dashboard/courier-service') : router.push('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout activePage={activePage}>
      <div>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Courier service
          </Typography>
        </div>
        <div className='flex mb-8 gap-[10px] md:gap-[91px] font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          <span
            onClick={() => setPending(true)}
            className={`text-brandGray-100 px-5 cursor-pointer pb-2.5 ${
              pending &&
              'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
            }`}
          >
            Pending
          </span>{' '}
          <span
            onClick={() => setPending(false)}
            className={`text-brandGray-100 px-5 cursor-pointer pb-2.5 ${
              pending ||
              'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
            }`}
          >
            Completed
          </span>
        </div>
        <div className='hidden md:block'>
          {pending ? (
            <Card>
              <span className='text-[10px] justify-center px-[12px]  leading-[10px] text-[#E59400]  bg-[#FFF6E5] py-[9px] flex items-center rounded-lg '>
                Pending
              </span>
            </Card>
          ) : (
            <Card>
              {' '}
              <span className='text-[10px] leading-[10px] text-brandGreen-300 bg-brandGreen-100 py-[9px] px-[12px] rounded-lg '>
                Completed
              </span>
            </Card>
          )}{' '}
        </div>

        <div className='md:hidden'>
          {pending ? (
            <CardMobile>
              <span className='text-[10px] justify-center  leading-[10px] text-[#E59400] py-[9px] px-[12px] bg-[#FFF6E5] rounded-lg'>
                Pending
              </span>
            </CardMobile>
          ) : (
            <CardMobile>
              {' '}
              <span className='text-[10px] leading-[10px] text-brandGreen-300 bg-brandGreen-100 py-[9px] px-[12px] rounded-lg '>
                Completed
              </span>
            </CardMobile>
          )}{' '}
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
          Send a package
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default CourierService;
