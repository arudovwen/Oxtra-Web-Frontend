import React from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Image from 'next/image';
import car from '../public/assets/honda.png';
import seats from '../public/assets/seats.png';
import classNames from 'classnames';
import ac from '../public/assets/ac.png';
import Button from '@/components/Button';
import AlterFooter from '@/components/Footer/AlterFooter';
import auto from '../public/assets/automatic.png';
import fuel from '../public/assets/GasPump.png';

const blockClasses = classNames(
  `border   border-[#d4d6d8] p-5 rounded-lg mb-[24px]`
);

const tripClasses = classNames(
  `text-[12px] font-gordita-regular leading-[12px] text-brandGray-300`
);

const inputClasses = classNames(
  'px-2 py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full'
);

const labelClasses = classNames(
  'font-gordita-medium text-brandGray-100 text-sm'
);

const offers = [
  {
    name: 'Daily trips are 8am - 8pm',
  },
  {
    name: 'Personal Accident Protection',
  },
  {
    name: 'Loss Damage Waiver',
  },
  {
    name: ' Comprehensive insurance',
  },
  {
    name: 'Includes Unlimited Free Kilometers',
  },
];

const carFeatures = [
  {
    feature: '5 Seats',
    icon: seats,
  },
  {
    feature: 'Automatic',
    icon: auto,
  },
  {
    feature: 'Air conditioning',
    icon: ac,
  },
  {
    feature: 'Fuel Unlimited',
    icon: fuel,
  },
];

const SingleCar = () => {
  const activePage = 'singlecar';
  return (
    <div>
      <Container>
        <Navigation
          color='text-brandGray-300'
          hover='hover:text-brandGreen-300'
          buttonBg='bg-brandGreen-300'
          buttonText='text-white'
          buttonHover='hover:bg-white'
          activePage={activePage}
          navBackground='white'
        />

        <div
          className='text-brandGray-500 flex items-center mb-5 gap-[399px] mt-8
'
        >
          <div className='flex items-center gap-2'>
            <AiOutlineArrowLeft />
            Back
          </div>
          <div>
            <Typography as='h4' font='font-gordita-bold'>
              Trip Breakdown
            </Typography>
          </div>
        </div>
        <div className='border-t-4 my-5 border-brandGray-500'></div>
        <div className='flex gap-[40px] mb-[31px]'>
          <div className={`${blockClasses}, w-1/2 h-full`}>
            <div className='flex gap-[40px]'>
              <Image
                src={car}
                height={261}
                width={192}
                alt='car'
                className='rounded-lg'
              />
              <div>
                <div className='mb-6'>
                  <Typography as='h6' font='font-gordita-medium'>
                    Honda CR-V (2015)
                  </Typography>
                </div>
                {carFeatures.map((feature) => {
                  return (
                    <div
                      key={feature.feature}
                      className='text-base flex gap-[13.33px] mb-4 text-brandGreen-300 font-gordita-medium'
                    >
                      <Image
                        src={feature.icon}
                        alt={feature.feature}
                        width={12.14}
                        height={13.33}
                      />
                      <span>{feature.feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className={blockClasses}>
              <div className='flex gap-[40px] mb-[20px]'>
                <div className='w-3/4'>
                  <label htmlFor='Pick up location' className={labelClasses}>
                    Pick up location
                  </label>
                  <input
                    type='text'
                    placeholder='Enter address or airport'
                    className={inputClasses}
                  />
                </div>
                <div className='w-1/4'>
                  <label htmlFor='pick up Date' className={labelClasses}>
                    Pick up Date
                  </label>
                  <input
                    type='date'
                    id='pick up Date'
                    className={`${inputClasses}  uppercase`}
                    name='pick up Date'
                  />
                </div>
              </div>

              <div className='flex gap-[26px] mb-[20px]'>
                <div className=' flex items-center gap-2.5'>
                  <input type='checkbox' className='rounded' />
                  <div className={tripClasses}>Daily trip</div>
                </div>
                <div className='flex items-center gap-2.5'>
                  <input type='checkbox' className='rounded bg-green-400' />
                  <div className={tripClasses}>Hourly trip</div>
                </div>
              </div>

              <div className='flex justify-between mb-[20px]'>
                <div className='flex gap-[40px]'>
                  <div className='w-1/3'>
                    <label htmlFor='Number of Days' className={labelClasses}>
                      Number of Hours
                    </label>
                    <input type='number' className={inputClasses} />
                  </div>
                  <div className='w-1/4'>
                    <label htmlFor='Time' className={labelClasses}>
                      Pick up Time
                    </label>
                    <input type='time' className={inputClasses} name='Time' />
                  </div>
                </div>

                <span className='text-brandGray-300'>
                  <Typography as='p' font='font-gordita-medium'>
                    N25,000
                  </Typography>
                </span>
              </div>
              <div className='flex justify-between text-brandGray-300 items-center mb-[20px]'>
                <div className=''>
                  <Typography as='p' font='font-gordita-medium'>
                    Insurance: Free
                  </Typography>
                </div>
                <span>
                  <Typography as='p' font='font-gordita-medium'>
                    N0.00
                  </Typography>
                </span>
              </div>

              <div className='bg-brandGray-200 text-brandGray-300 p-6 rounded-lg mb-[20px]'>
                <h2 className='text-[24px] mb-4 leading-[24px] font-gordita-medium '>
                  Your offer
                </h2>{' '}
                <ul>
                  {offers.map((offer) => {
                    return (
                      <li
                        key={offer.name}
                        className='flex gap-2 items-center mb-1 text-[14px] leading-[21.8px] font-gordita-regular'
                      >
                        <span
                          className='text-[10px]
                '
                        >
                          ●
                        </span>{' '}
                        {offer.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='flex justify-between text-brandGray-300 items-center'>
                <span>
                  <Typography as='p' font='font-gordita-medium'>
                    Total
                  </Typography>
                </span>

                <span>
                  <Typography as='h4' font='font-gordita-medium'>
                    N37,500
                  </Typography>
                </span>
              </div>
            </div>
            <Button
              bg='bg-brandGreen-300'
              hover='hover:bg-brandGray-200'
              textColor='text-white'
              width={true}
              size='text-sm'
            >
              Continue
            </Button>
          </div>
        </div>
      </Container>
      <AlterFooter />
    </div>
  );
};

export default SingleCar;
