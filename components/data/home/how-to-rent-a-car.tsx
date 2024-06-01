import React, { useState, useEffect } from 'react';
import Container from '@/layout/NonAuthLayout/Container';
import imageone from '../../../public/assets/hero-animation/image-one.png';
import imageTwo from '../../../public/assets/hero-animation/image-two.png';
import imageThree from '../../../public/assets/hero-animation/image-three.png';
import pay from '../../../public/assets/hero-animation/pay.png';
import Typography from '@/components/constants/Typorgraphy';
import { BsArrowRight } from 'react-icons/bs';
import car from '../../../public/assets/Frame.png';
import Button from '@/components/constants/Button';
import Image from 'next/image';

const procedures = [
  {
    name: 'Select preferred dates',
    image1: imageone,
    content:
      'Our book module allows you to pick your preferred trip dates to get vehicles available for your schedule.',
    image2: pay,
  },
  {
    name: 'Select preferred vehicle',
    image1: imageTwo,
    content:
      'Your desired vehicle awaits you to ride in style and comfort to your destination. Choose from our fleet.',
    image2: pay,
  },
  {
    name: 'Pay and get your car',
    image1: imageThree,
    content:
      'Make payment for your booking, get a confirmation notification from us and await the vehicle at your doorstep',
    image2: pay,
  },
];

const HowToRentaCar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % procedures.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const currentItem = procedures[currentIndex];
  return (
    <Container
      marginBottom='mb-[120px]'
      className='relative pt-[521px] sm:pt-[528px] lg:pt-[260px] xl:pt-[200px]'
    >
      <Image
        data-aos='slide-right'
        src={car}
        width={140}
        height={100}
        alt='car'
        className='top-20 hidden xl:block absolute left-20 h-auto'
      />
      <div className='text-center text-brandGray-300 mb-12'>
        <Typography as='h3' font='font-gordita-bold'>
          How to rent a car on Oxtra
        </Typography>
      </div>
      <div className='flex items-center justify-center gap-8'>
        <div className=' flex gap-[24px]'>
          <Image src={currentItem.image1} alt={currentItem.name} />
          <div className='w-[360px] '>
            <div className='mb-[16px]'>
              <Typography as='h5' font='font-gordita-bold'>
                {currentItem.name}
              </Typography>
            </div>
            <p className='font-gordita-regular   text-[16px] text-brandGray-300 leading-[21px]'>
              {currentItem.content}
            </p>
          </div>
        </div>

        <Image src={currentItem.image2} alt={currentItem.name} width={400} height={512} />
      </div>

      <div className='flex justify-center'>
        <Button
          data-aos='fade-up'
          data-aos-duration='700'
          data-aos-once='true'
          bg='bg-brandGreen-300'
          hover='hover:bg-brandGray-200'
          textColor='text-white'
          width={false}
          size='text-sm'
          link='rent-a-car'
        >
          <div className='flex items-center  gap-4'>
            <span>Find a vehicle</span>
            <span>
              <BsArrowRight />
            </span>
          </div>
        </Button>
      </div>
    </Container>
  );
};

export default HowToRentaCar;
