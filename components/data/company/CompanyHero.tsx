import React from 'react';
import Container from '../../../layout/NonAuthLayout/Container';
import Navigation from '../../../layout/NonAuthLayout/Navigation';
import Typography from '../../constants/Typorgraphy';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../../constants/Button';
import Image from 'next/image';
import cloud from '../../../public/assets/cloud.png';
import car from '../../../public/assets//Frame.png';
import moneyBag from '../../../public/assets/money-hand.png';

interface CompanyHeroProps {
  activePage: string;
}

const CompanyHero = ({ activePage }: CompanyHeroProps) => {
  return (
    <Container>
      <div className='text-brandGray-300 relative'>
        {/* <Navigation
          color='text-brandGray-300'
          hover='hover:text-brandGreen-300'
          buttonBg='bg-brandGreen-300'
          buttonText='text-white'
          buttonHover='hover:bg-white'
          activePage={activePage}
          navBackground='white'
          menuColor='text-brandGreen-300'
        /> */}

        <div className='text-center mt-[166px]'>
          <div className=' mb-6 '>
            <Typography as='h2' font='font-gordita-bold'>
              {/* We want to transform the <br /> way Lagos moves */}
              Guiding the shift towards <br /> eco-friendly travel in Africa
            </Typography>
          </div>
          <div className='mb-6 text-[18px] leading-[30px] font-gordita-regular'>
            Oxtra offers a sustainable, convenient, and affordable e-transportation solution,
            committed to reducing <br /> carbon emissions and supporting the green SDG goal.
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
      </div>
    </Container>
  );
};

export default CompanyHero;
