import React from 'react';
import Typography from '../Typography';

const DashbordHeader = () => {
  return (
    <div className='mt-[58px]'>
      <div className='mb-4'>
        <Typography as='h4' font='font-gordita-medium'>
          Hello, Adeleke!
        </Typography>
      </div>
      <p className='text-sm text-[#475467]'>
        Manage your account and activities here
      </p>
    </div>
  );
};

export default DashbordHeader;
