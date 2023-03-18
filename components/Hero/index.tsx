import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import Navigation from '@/components/Navigation';
import heroBackground from '../../public/assets/herobackground.png';
import heroCar from '../../public/assets/heroCar.png';
import heroCarHalf from '../../public/assets/heroCarHalf.png';

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
            <Typography as='h5' font='font-gordita-medium'>
              Search, and book a vehicle for rent easily
            </Typography>
          </div>
          <div className='max-w-[648px]'>
            <Typography as='small' font='font-gordita-light'>
              With our flexible options, you can easily get a vehicle for any{' '}
              <br /> of your journey needs. Browse through our wide range of{' '}
              <br />
              vehicles today!
            </Typography>
          </div>
        </div>
      </Container>

      <Image
        src={heroCar}
        alt='backgorund image'
        className='object-cover absolute top-[5rem] hidden 2xl:block right-0 min-[1700px]:right-[80px] min-[1900px]:right-[192px] min-[2200px]:right-[320px]'
        width={680}
        height={480}
      />
      <Image
        src={heroCarHalf}
        alt='backgorund image'
        className='object-cover absolute top-[14px] 2xl:hidden right-0'
        width={580}
        height={380}
      />
    </div>
  );
};

export default Hero;
