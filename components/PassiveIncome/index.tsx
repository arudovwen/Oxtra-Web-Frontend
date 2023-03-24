import React from 'react';
import Image from 'next/image';
import passiveIncome from '../../public/assets/passiveIncome.png';
import Typography from '../Typography';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../Button';
import Container from '../Container';

const PassiveIncome = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={marginBottom}>
      <div className='flex items-center justify-center gap-20'>
        <Image
          src={passiveIncome}
          width={400}
          height={400}
          alt='passive income'
          className='object-cover rounded-lg'
        />

        <div className='w-[400px]'>
          <div className='mb-6 text-brandGray-300 text-[40px] leading-[54.4px] font-gordita-bold '>
            Earn passive income with your vehicle
          </div>
          <div className='mb-6 text-brandGray-400 text-[16px] font-gordita-regular leading-[24px]'>
            You can make money on Oxtra by hosting your vehicle on our platform.
            We lease your vehicle out and share the payment.
          </div>

          <Button
            bg='bg-brandGreen-300'
            hover='hover:bg-brandGray-200'
            textColor='text-white'
            width={false}
            size='text-sm'
          >
            <div className='flex items-center gap-4'>
              <span>Host your vehicle for lease</span>{' '}
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
