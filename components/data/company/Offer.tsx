import React from 'react';
import Typography from '../../constants/Typorgraphy';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../../../layout/NonAuthLayout/Container';
import { offers } from '@/components/constants/arrays';

const Offer = () => {
  return (
    <div className=' bg-[#F8FCF9] '>
      <Container className=''>
        <div className='mt-[234px]  mb-[200px]'>
          <div className='text-brandGray-300 text-center mb-[48px] font-gordita-bold text-[56px] leading-[56px]'>
            What we stand for
          </div>
          <div className='flex flex-col lg:flex-row gap-10 items-center '>
            {offers.map((offer) => {
              return (
                <div key={offer.title} className='z-50 w-full  rounded-[4px] p-6  bg-[#E4F2E6]'>
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={48}
                    height={48}
                    className='rounded-xl '
                  />

                  <div className='my-[20px] text-brandGray-300'>
                    <Typography as='h6' font='font-gordita-medium'>
                      {offer.title}
                    </Typography>
                  </div>
                  <div className='mb-6 text-[14px] leading-[21px] font-gordita-regular text-brandGray-100'>
                    {offer.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
