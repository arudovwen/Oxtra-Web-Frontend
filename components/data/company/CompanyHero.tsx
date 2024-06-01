import React from 'react';
import Container from '../../../layout/NonAuthLayout/Container';
import Typography from '../../constants/Typorgraphy';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../../constants/Button';

interface CompanyHeroProps {
  activePage: string;
}

const CompanyHero = ({ activePage }: CompanyHeroProps) => {
  return (
    <Container>
      <div className='text-brandGray-300 relative'>
        <div className='text-center mt-[166px]'>
          <div className=' mb-6 '>
            <Typography as='h2' font='font-gordita-ultra'>
              Guiding the shift towards <br /> eco-friendly travel in Africa
            </Typography>
          </div>
          <div className='mb-6 text-[18px] leading-[30px] font-gordita-regular z-50 relative'>
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
