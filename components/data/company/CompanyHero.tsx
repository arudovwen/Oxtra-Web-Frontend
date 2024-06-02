import React from 'react';
import Container from '../../../layout/NonAuthLayout/Container';
import Typography from '../../constants/Typorgraphy';
import { BsArrowRight } from 'react-icons/bs';

import backcar from '../../../public/assets/Rectangle 100.png';
import pump from '../../../public/assets/pump.png';
import Button from '../../constants/Button';
import Image from 'next/image';

const CompanyHero = () => {
  return (
    <Container className='relative'>
      <div className='text-brandGray-300 relative'>
        <div className='text-center  mt-[68px] md:mt-[166px] z-50 relative'>
          <div className=' mb-6 '>
            <Typography as='h2' font='font-gordita-ultra'>
              Guiding the shift towards <br /> eco-friendly travel in Africa
            </Typography>
          </div>
          <div className='mb-6 text-[18px] leading-[30px] font-gordita-regular '>
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

      <Image
        src={backcar}
        width={750}
        height={750}
        alt='car'
        className='bottom-[-17rem] hidden xl:block absolute left-[-35rem]'
      />
      <Image
        src={pump}
        width={500}
        height={500}
        alt='pump'
        className='top-[120px] hidden xl:block absolute right-[-15rem]'
      />
    </Container>
  );
};

export default CompanyHero;
