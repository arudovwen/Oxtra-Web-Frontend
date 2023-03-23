import React from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import Search from '@/components/Search';
import BookCars from '@/components/BookCars';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const RentVehicle = () => {
  const activePage = 'Rent a vehicle';

  return (
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
      <div className='mt-10 text-center text-brandGray-300'>
        <div className='mb-4'>
          <Typography as='h3' font='font-gordita-bold'>
            Find the right car for you
          </Typography>
        </div>
        <div className='mb-8 text-[16px] leading-[21.76px] font-gordita-regular'>
          You can find the best offers at the top or filter/search for your{' '}
          <br />
          preferred car.
        </div>
      </div>

      <Search />
      <BookCars />
      <Services />
      <Footer />
    </Container>
  );
};

export default RentVehicle;
