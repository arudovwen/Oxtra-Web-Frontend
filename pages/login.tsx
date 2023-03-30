import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import React from 'react';
import LoginForm from '@/components/Forms/LoginForm';
import AlterFooter from '@/components/Footers/AlterFooter';

const Login = () => {
  const activePage = 'Login';
  return (
    <div>
      <Container>
        <Navigation
          color='text-brandGray-300'
          hover='hover:text-brandGreen-300'
          buttonBg='bg-brandGreen-300'
          buttonText='text-white'
          buttonHover='hover:bg-white'
          activePage={activePage}
          navBackground='white'
        />

        <LoginForm />
      </Container>
      <AlterFooter />
    </div>
  );
};

export default Login;
