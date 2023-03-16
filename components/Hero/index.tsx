import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import Navigation from '@/components/Navigation';
import heroBackground from '../../public/assets/herobackground.png';
import heroCar from '../../public/assets/heroCar.png';
import FindPreferredCar from '../FindPreferredCar';

const Hero = () => {
  return (
    <div className='relative isolate overflow-hidden'>
      <Image
        src={heroBackground}
        alt='backgorund image'
        className='absolute inset-0 -z-10 h-full w-full object-cover'
        fill
      />
      <Container>
        <Navigation />

        <div className='text-white pb-[204px] mt-[110px]'>
          <div className='max-w-[608px] mb-6'>
            <Typography as='h5' weight='font-medium'>
              Search, and book a vehicle for rent easily
            </Typography>
          </div>
          <div className='max-w-[648px]'>
            <Typography as='small' weight='font-normal'>
              With our flexible options, you can easily get a vehicle for any of
              your journey needs. Browse through our wide range of vehicles
              today!
            </Typography>
          </div>
        </div>
      </Container>
      <Image
        src={heroCar}
        alt='backgorund image'
        className='object-cover absolute top-0 right-0'
        width={600}
        height={450}
      />
    </div>
  );
};

export default Hero;
