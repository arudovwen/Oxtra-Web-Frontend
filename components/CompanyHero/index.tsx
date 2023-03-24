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
      <div className='text-brandGray-300 text-center relative overflow-cli'>
        <Navigation
          color='text-brandGray-300'
          hover='hover:text-brandGreen-300'
          buttonBg='bg-brandGreen-300'
          buttonText='text-white'
          buttonHover='hover:bg-white'
          activePage={activePage}
          navBackground='white'
        />
        <div className='mt-[250px] mb-6'>
          <Typography as='h2' font='font-gordita-bold'>
            We want to transform the <br /> way Lagos moves
          </Typography>
        </div>
        <div className='mb-6 text-[20px] leading-[30px] font-gordita-regular'>
          Lagos is a bustling city with millions of residents and visitors, and
          we understand that getting around can be a <br /> challenge.
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

        <Image
          src={cloud}
          width={360}
          height={355}
          alt='cloud'
          className='top-[80px] absolute left-0'
        />
        <Image
          src={car}
          width={300}
          height={200}
          alt='blue'
          className='top-[39rem] absolute right-[8rem]'
        />
        <Image
          src={moneyBag}
          width={200}
          height={200}
          alt='money bag'
          className='top-[100rem] absolute left-[-3rem] '
        />
      </div>
    </Container>
  );
};

export default CompanyHero;
