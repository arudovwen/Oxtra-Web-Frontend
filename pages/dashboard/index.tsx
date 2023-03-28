import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';
import honda from '../../public/assets/honda.png';
import Image from 'next/image';

const RentVehicle = () => {
  const activePage = 'Rent a vehicle';
  return (
    <DashboardLayout activePage={activePage}>
      <div className='bg-brandGray-200 p-8 rounded-xl w-[840px]'>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Rent a car
          </Typography>
        </div>
        <div className='flex mb-8 gap-[91px] pl-[59px] pb-[10px] font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          <span>Pending</span>
          <span className='text-brandGray-100'>Completed</span>
        </div>
        <div className='bg-white  p-4 rounded-lg flex '>
          <div>
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
          <div>
            <div className='flex items-baseline '>
              <span className='text-[12px] leading-[12px] font-gordita-regular text-brandGray-100'>
                Trip date:
              </span>
              <span>24/2/2023</span>
            </div>
            <div className='flex items-baseline '>
              <span className='text-[12px] leading-[12px] font-gordita-regular text-brandGray-100'>
                Cost:
              </span>
              <span>24/2/2023</span>
            </div>
            <div className='flex items-baseline '>
              <span className='text-[12px] leading-[12px] font-gordita-regular text-brandGray-100'>
                Duration:
              </span>
              <span>24/2/2023</span>
            </div>
            <div className='flex items-baseline '>
              <span className='text-[12px] leading-[12px] font-gordita-regular text-brandGray-100'>
                Payment Status:
              </span>
              <span>24/2/2023</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RentVehicle;
