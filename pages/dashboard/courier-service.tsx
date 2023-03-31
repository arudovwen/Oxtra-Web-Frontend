import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';
import classNames from 'classnames';
import { MdArrowForwardIos } from 'react-icons/md';
import { FiCalendar } from 'react-icons/fi';
import { TbTruck } from 'react-icons/tb';
import Button from '@/components/Button';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineLine } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';

const rowClasses = classNames(
  'flex flex-col items-baseline mb-[20px] justify-between'
);

const headingClasses = classNames(
  'text-brandGray-300 font-gordita-medium text-[12px] mb-2 leading-[12px]'
);

const infoClasses = classNames(
  'text-[12px] leading-[12px] font-gordita-regular text-brandGray-100'
);

const CourierService = () => {
  const activePage = 'Courier service';
  return (
    <DashboardLayout activePage={activePage}>
      <div className='bg-brandGray-200 p-8 rounded-xl w-[840px]'>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Courier service
          </Typography>
        </div>
        <div className='flex mb-8 gap-[91px] pl-[59px] pb-[10px] font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          <span>Pending</span>
          <span className='text-brandGray-100'>Completed</span>
        </div>
        <div
          className='bg-white
         p-4 rounded-lg inline-flex'
        >
          <div className='flex flex-col justify-between'>
            <TbTruck className='bg-brandGreen-300 p-2 text-white rounded-full w-[40px] h-[40px]' />

            <span className='text-[12px] text-[#666666] flex gap-2  leading-[12px] font-gordita-medium'>
              <FiCalendar /> 24/2/2023
            </span>
          </div>
          <div className='w-[270px] mr-[39px] relative'>
            <div className={rowClasses}>
              <span className={headingClasses}>Pick-up address</span>
              <span className={infoClasses}>
                12, ajifoluke avenue, Lekki - Lekki, Lagos state
              </span>
            </div>
            <BiCurrentLocation className='text-brandGreen-300 absolute top-[3px] left-[-24px]' />
            <div className={rowClasses}>
              <span className={headingClasses}>Drop-off adress</span>
              <span className={infoClasses}>
                12, ajifoluke avenue, Lekki - Lekki, Lagos state
              </span>
            </div>
            <div className='border-t-2 border-brandGreen-300  w-[32px] top-[35px] rotate-90 absolute left-[-32px]'></div>
            <HiOutlineLocationMarker className=' absolute top-[54px] left-[-24px]' />
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
          Send a package
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default CourierService;
