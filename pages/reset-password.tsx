import React from 'react';
import AlterFooter from '@/layout/NonAuthLayout/Footers/AlterFooter';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import ResetPasswordForm from '@/components/constants/forms/ResetPasswordForm';

const ResetPassword = () => {
  const activePage = 'Reset password';
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    user ? router.push('/') : router.push('/reset-password');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex-1 flex justify-center items-center'>
        <ResetPasswordForm />
      </div>

      <AlterFooter />
    </div>
  );
};

export default ResetPassword;
