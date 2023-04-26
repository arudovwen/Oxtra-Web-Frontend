import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';
import PasswordForm from '@/components/Forms/PasswordForm';
import ResetPasswordForm from '@/components/Forms/ResetPasswordForm';
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const Password = () => {
  const activePage = 'password';
  const [changePassword, setChangePassword] = useState(true);

  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user ? router.push('/dashboard/password') : router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DashboardLayout activePage={activePage}>
      <div className='mb-8'>
        <Typography as='p' font='font-gordita-medium'>
          Password
        </Typography>
      </div>
      <div className='flex mb-8 gap-[5px] md:gap-[91px] text-xs md:text-sm  font-gordita-regular border-b border-[#D4D6D8]'>
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
          Reset password
        </span>
      </div>

      {changePassword ? <PasswordForm /> : <ResetPasswordForm />}
    </DashboardLayout>
  );
};

export default Password;
