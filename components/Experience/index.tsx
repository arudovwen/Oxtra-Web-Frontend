import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import Typography from '../Typography';
import experience from '../../public/assets/experience.png';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../Button';
import car from '../../public/assets/experienceCar.png';

const Experienve = () => {
  return (
    <Container>
      <div className='bg-brand-amber py-[80px] w-full mb-[124px] relative  rounded-lg flex gap-[138.28px] justify-center'>
        <Image
          src={experience}
          alt='come and experience'
          className='object-cover rounded-3xl'
          fill
        />

        <div className='text-center w-[749px] z-30'>
          <div className='mb-6 text-white'>
            <Typography as='h2L' font='font-gordita-medium'>
              Come and experience ease and class when ride with Oxtra.
            </Typography>
          </div>
          <div className='mb-10 text-white'>
            <Typography as='xsmall' font='font-gordita-regular'>
              We take pride in the extra mile we go through <br /> to ensure
              that you have a delightful experience when you ride with us
            </Typography>
          </div>
          <Button bg='bg-brandGray-200' hover='hover:bg-brandGreen-300'>
            <div className='flex items-center gap-4'>
              <Typography as='xxsmall' font='font-gordita-medium'>
                Find a vehicle
              </Typography>{' '}
              <span>
                <BsArrowRight />
              </span>
            </div>
          </Button>
        </div>

        <Image
          src={car}
          alt='come and experience'
          className='object-cover absolute z-30 bottom-0 right-0'
          width={400}
          height={400}
        />
      </div>
    </Container>
  );
};

export default Experienve;
