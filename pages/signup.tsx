import React from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import SignUpForm from '@/components/Forms/SignUpForm';
import AlterFooter from '@/components/Footer/AlterFooter';

const SignUp = () => {
  const activePage = '';

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
        <SignUpForm />
      </Container>
      <AlterFooter />
    </div>
  );
};

export default SignUp;
