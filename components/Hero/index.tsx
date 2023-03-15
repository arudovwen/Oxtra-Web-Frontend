import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import Navigation from '@/components/Navigation';
import heroBackground from '../../public/assets/herobackground.png';

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
        <div className='mb-32  pt-8  pb-9'>
          <Navigation />
        </div>

        <div className='text-white pb-[151px]'>
          <div className='mb-6 opacity-50'>
            <Typography as='p' weight='font-normal'>
              New product
            </Typography>
          </div>
          <div className='mb-6 w-[398px]'>
            <Typography as='h1' weight='font-bold'>
              gg
            </Typography>
          </div>
          <div className='opacity-75 mb-6 w-[349px]'>
            <Typography as='xsmall' weight='font-medium'>
              ggg
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
