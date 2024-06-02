import React from 'react';
import SignUpForm from '@/components/constants/forms/SignUpForm';
import AlterFooter from '@/layout/NonAuthLayout/Footers/AlterFooter';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

const SignUp = () => {
  const activePage = '';

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    user ? router.push('/') : router.push('/signup');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex-1 flex justify-center items-center'>
        <SignUpForm />{' '}
      </div>

      <AlterFooter />
    </div>
  );
};

export default SignUp;
