import React from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import SignUpForm from '@/components/Forms/SignUpForm';
import AlterFooter from '@/components/Footers/AlterFooter';


const SignUp = () => {
  const activePage = '';

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
          menuColor='text-brandGreen-300'
        />{' '}
      </Container>
      <div className='flex-1 flex justify-center items-center'>
        <SignUpForm />{' '}
      </div>

      <AlterFooter />
    </div>
  );
};

export default SignUp;
