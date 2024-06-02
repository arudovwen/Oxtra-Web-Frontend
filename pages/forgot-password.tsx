import React from 'react';
import AlterFooter from '@/layout/NonAuthLayout/Footers/AlterFooter';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import ForgotPasswordForm from '@/components/constants/forms/ForgotPasswordForm';

const ForgotPassword = () => {
  const activePage = 'Forgot password';
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    user ? router.push('/') : router.push('/forgot-password');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex-1 flex justify-center items-center'>
        <ForgotPasswordForm />
      </div>

      <AlterFooter />
    </div>
  );
};

export default ForgotPassword;
