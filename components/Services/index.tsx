import React from 'react';
import Typography from '../Typography';
import { AiOutlineCar } from 'react-icons/ai';
import { RiTruckLine } from 'react-icons/ri';
import { TbPlaneTilt } from 'react-icons/tb';
import { BsArrowRight } from 'react-icons/bs';
import classNames from 'classnames';
import Link from 'next/link';

const offerIconClasses = classNames('w-[36px] h-[36px]');

const offers = [
  {
    title: 'Cars',
    description: 'We have different kinds of cars for whatever journey need',
    background: 'bg-[#FDECEC]',
    linkText: 'Check out our cars',
    icon: <AiOutlineCar className={offerIconClasses} />,
    link: '/',
  },
  {
    title: 'Courier',
    description: 'We have vehicles to help you deliver however big or small',
    background: 'bg-[#F1F8F3]',
    linkText: 'Get a quote',
    icon: <RiTruckLine className={offerIconClasses} />,
    link: '/',
  },
  {
    title: 'Airport Trips',
    description: 'Whether it is pick up or drop-off, we’ve got you covered',
    background: 'bg-[#FFFFEB]',
    linkText: 'Book a trip now',
    icon: <TbPlaneTilt className={offerIconClasses} />,
    link: '/',
  },
];

const Services = () => {
  return (
    <div className='mt-[234px] text-center mb-[120px]'>
      <div className='text-brandGray-300 mb-12'>
        <Typography as='h2' font='font-gordita-bold'>
          Our services
        </Typography>
      </div>
      <div className='grid grid-cols-3 gap-10 w-[884px] mx-auto'>
        {offers.map((offer) => {
          return (
            <div
              key={offer.title}
              className={`flex flex-col rounded items-center pt-[33px] px-[25px] pb-[25px] ${offer.background}`}
            >
              <span className='mb-[26px]'>{offer.icon}</span>
              <div className='mb-5'>
                <Typography as='small' font='font-gordita-medium'>
                  {offer.title}
                </Typography>
              </div>
              <div className='mb-[21px]'>
                <Typography as='xxsmall' font='font-gordita-regular'>
                  {offer.description}
                </Typography>
              </div>
              <span>
                <Link
                  href={offer.link}
                  className='text-brandGreen-300 flex items-center gap-4'
                >
                  <Typography as='xxsmall' font='font-gordita-medium'>
                    {offer.linkText}
                  </Typography>
                  <BsArrowRight />
                </Link>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
