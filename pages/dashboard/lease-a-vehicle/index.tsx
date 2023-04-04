import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';
import classNames from 'classnames';
import { CiClock2 } from 'react-icons/ci';
import { FiCalendar } from 'react-icons/fi';

const labelClasses = classNames(
  'block text-[12px] leading-[12px] font-gordita-medium text-[#4C4C4C]'
);

const infoClasses = classNames(
  'text-[12px] leading-[12px] font-gordita-regular text-[#666666]'
);

const LeaseVehicle = () => {
  const activePage = 'Lease vehicle';
  return (
    <DashboardLayout activePage={activePage}>
      {' '}
      <div className='bg-brandGray-200 p-8 rounded-xl w-[840px]'>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Lease your vehicle
          </Typography>
        </div>
        <div className='flex mb-8 gap-[91px] pl-[59px] pb-[10px] font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          <span>Pending</span>
          <span className='text-brandGray-100'>Completed</span>
        </div>
        <div className=' border-[#D4D6D8] border rounded-lg inline-block p-[23px]'>
          <div className='mb-6'>
            <Typography as='p' font='font-gordita-medium'>
              Request details
            </Typography>
          </div>
          <div>
            <div className='flex mb-6  gap-[148px] items-center'>
              <div>
                <label htmlFor='expiration-date' className={labelClasses}>
                  First name
                </label>
                <div className='mt-3'>
                  <span className={infoClasses}>John Thomas</span>
                </div>
              </div>

              <div className=''>
                <label className={labelClasses}>Phone number</label>
                <div className='mt-3'>
                  <span className={infoClasses}>091 8734 6574</span>
                </div>
              </div>
            </div>

            <div className='mb-6'>
              <label htmlFor='' className={labelClasses}>
                Email
              </label>
              <div className='mt-3'>
                <span className={infoClasses}>Samumo@gmail.com</span>
              </div>
            </div>

            <div className='mb-[27px]'>
              <label htmlFor='card-number' className={labelClasses}>
                Pick-up address
              </label>
              <div className='mt-3'>
                <span className={infoClasses}>
                  12, ajifoluke avenue, Lekki - Lekki, Lagos state
                </span>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                <FiCalendar /> <span className={infoClasses}>24/2/2023</span>
              </div>

              <div className='flex gap-2 items-center'>
                <CiClock2 /> <span className={infoClasses}>08:00am</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LeaseVehicle;
