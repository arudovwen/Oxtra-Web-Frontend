import React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import Typography from '../Typography';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../Button';
import Image from 'next/image';
import cloud from '../../public/assets/cloud.png';
import car from '../../public/assets//Frame.png';
import moneyBag from '../../public/assets/image 35.png';

interface CompanyHeroProps {
  activePage: string;
}

const CompanyHero = ({ activePage }: CompanyHeroProps) => {
  return (
    <Container>
      <div className='text-brandGray-300  relative'>
        <Navigation
          color='text-brandGray-300'
          hover='hover:text-brandGreen-300'
          buttonBg='bg-brandGreen-300'
          buttonText='text-white'
          buttonHover='hover:bg-white'
          activePage={activePage}
          navBackground='white'
          menuColor='text-brandGreen-300'
        />

        <div className='text-center mt-[250px]'>
          <div className=' mb-6 '>
            <Typography as='h2' font='font-gordita-bold'>
              We want to transform the <br /> way Lagos moves
            </Typography>
          </div>
          <div className='mb-6 text-[20px] leading-[30px] font-gordita-regular'>
            Lagos is a bustling city with millions of residents and visitors,
            and we understand that getting around can be a <br /> challenge.
            That&lsquo;s why we are dedicated to improving the transportation
            infrastructure, services, and <br /> technologies in Lagos to make
            them more efficient, reliable, and convenient for everyone.
          </div>

          <Button
            bg='bg-brandGreen-300'
            hover='hover:bg-brandGray-200'
            textColor='text-white'
            width={false}
            size='text-sm'
          >
            <div className='flex items-center gap-4'>
              <span>Get moving with us</span>{' '}
              <span>
                <BsArrowRight />
              </span>
            </div>
          </Button>
        </div>
        <Image
          src={cloud}
          width={360}
          height={355}
          alt='cloud'
          className='top-[80px] absolute  left-0'
        />

        <Image
          src={car}
          width={300}
          height={200}
          alt='car'
          className='top-[624px] absolute hidden xl:block right-[128px]'
        />
        <Image
          src={moneyBag}
          width={200}
          height={200}
          alt='money bag'
          className='top-[3040px] hidden xl:block absolute left-[12px]'
        />
      </div>
    </Container>
  );
};

export default CompanyHero;
