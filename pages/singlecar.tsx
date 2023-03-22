import React from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import Typography from '@/components/Typography';

const SingleCar = () => {
  const activePage = 'singlecar';
  return (
    <Container>
      <Navigation
        color='text-brandGray-300'
        hover='hover:text-brandGreen-300'
        buttonBg='bg-brandGreen-300'
        buttonText='text-white'
        buttonHover='hover:bg-white'
        activePage={activePage}
      />

      <div
        className='text-[#242628] text-center mt-8
'
      >
        <Typography as='h3' font='font-gordita-bold'>
          Trip Breakdown
        </Typography>
      </div>
    </Container>
  );
};

export default SingleCar;
