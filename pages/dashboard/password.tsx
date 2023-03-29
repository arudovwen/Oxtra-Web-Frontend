import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';
import PasswordForm from '@/components/Forms/PasswordForm';

const Password = () => {
  const activePage = 'password';
  return (
    <DashboardLayout activePage={activePage}>
      <div className='bg-brandGray-200 pt-8 px-8 pb-[90px] rounded-xl w-[840px] mb-[128px]'>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Password
          </Typography>
        </div>
        <div className='flex mb-8 gap-[91px] pl-[59px] pb-[10px] font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          <span>Change password</span>
          <span className='text-brandGray-100'>Forgot password</span>
        </div>

        <PasswordForm />
      </div>
    </DashboardLayout>
  );
};

export default Password;
