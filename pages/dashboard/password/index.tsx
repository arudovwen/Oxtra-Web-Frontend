import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';
import PasswordForm from '@/components/Forms/PasswordForm';
import { useState } from 'react';

const Password = () => {
  const activePage = 'password';
  const [changePassword, setChangePassword] = useState(true);
  return (
    <DashboardLayout activePage={activePage}>
      <div className='bg-brandGray-200 pt-8 px-8 pb-[90px] rounded-xl w-[840px] mb-[128px]'>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Password
          </Typography>
        </div>
        <div className='flex mb-8 gap-[91px]  font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          <span
            onClick={() => setChangePassword(true)}
            className={`text-brandGray-100 px-5 cursor-pointer pb-2.5 ${
              changePassword &&
              'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
            }`}
          >
            Change password
          </span>{' '}
          <span
            onClick={() => setChangePassword(false)}
            className={`text-brandGray-100 px-5 cursor-pointer pb-2.5 ${
              changePassword ||
              'text-brandGreen-300 border-b-4 border-brandGreen-300 font-gordita-medium'
            }`}
          >
            Forgot password
          </span>
        </div>

        {changePassword ? <PasswordForm /> : <span>forgot password</span>}
      </div>
    </DashboardLayout>
  );
};

export default Password;
