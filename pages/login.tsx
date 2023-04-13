import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import React from 'react';
import LoginForm from '@/components/Forms/LoginForm';
import AlterFooter from '@/components/Footers/AlterFooter';
import CollapseNav from '@/components/Navigation/CollapseNav';

const Login = () => {
  const activePage = 'Login';
  return (
    <div className='h-screen flex flex-col'>
      <Container>
        <Navigation
          color='text-brandGray-300'
          hover='hover:text-brandGreen-300'
          buttonBg='bg-brandGreen-300'
          buttonText='text-white'
          buttonHover='hover:bg-white'
          activePage={activePage}
          navBackground='white'
        />{' '}
        <CollapseNav
          color='text-white'
          hover='hover:text-brandGreen-100'
          buttonBg='bg-white'
          buttonHover='hover:bg-brandGreen-300'
          buttonText='text-brandGray-300'
          activePage={activePage}
          navBackground='white'
          menuColor='text-brandGreen-300'
        />
      </Container>

      <div className='flex-1 flex justify-center items-center'>
        <LoginForm />
      </div>

      <AlterFooter />
    </div>
  );
};

export default Login;
