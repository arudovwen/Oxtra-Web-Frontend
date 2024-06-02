import React from 'react';
import LoginForm from '@/components/constants/forms/LoginForm';
import AlterFooter from '@/layout/NonAuthLayout/Footers/AlterFooter';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const Login = () => {
  const activePage = 'Login';
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    user ? router.push('/') : router.push('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex-1 flex justify-center items-center'>
        <LoginForm />
      </div>

      <AlterFooter />
    </div>
  );
};

export default Login;
