import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';

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
        <div className='bg-white p-4 rounded-lg inline-flex'>
          Lease your vehicle
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LeaseVehicle;
