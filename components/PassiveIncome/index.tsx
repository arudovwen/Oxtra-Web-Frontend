import React from 'react';
import Image from 'next/image';
import passiveIncome from '../../public/assets/passiveIncome.png';
import Typography from '../Typography';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../Button';
import Container from '../Container';

const PassiveIncome = () => {
  return (
    <Container>
      <div className='flex items-center justify-center gap-20 mb-[120px]'>
        <Image
          src={passiveIncome}
          width={400}
          height={400}
          alt='passive income'
          className='object-cover rounded-lg'
        />

        <div className='w-[400px]'>
          <div className='mb-6 text-brandGray-300'>
            <Typography as='h2L' font='font-gordita-bold'>
              Earn passive income with your vehicle
            </Typography>
          </div>
          <div className='mb-6 text-brandGray-400'>
            <Typography as='xsmallL' font='font-gordita-regular'>
              You can make money on Oxtra by hosting your vehicle on our
              platform. We lease your vehicle out and share the payment.
            </Typography>
          </div>

          <Button
            bg='bg-brandGreen-300'
            hover='hover:bg-brandGray-200'
            textColor='text-white'
          >
            <div className='flex items-center gap-4'>
              <Typography as='xxsmall' font='font-gordita-medium'>
                Host your vehicle for lease
              </Typography>{' '}
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

export default PassiveIncome;
