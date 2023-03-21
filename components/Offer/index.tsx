import React from 'react';
import Typography from '../Typography';
import { AiOutlineCar } from 'react-icons/ai';
import { RiTruckLine } from 'react-icons/ri';
import { TbPlaneTilt } from 'react-icons/tb';
import { BsArrowRight } from 'react-icons/bs';
import classNames from 'classnames';
import Link from 'next/link';
import offerCar from '../../public/assets/offerCar.png';
import Image from 'next/image';
import Container from '../Container';
import pricing from '../../public/assets/pricing.png';

const offerIconClasses = classNames('w-[36px] h-[36px]');

const offers = [
  {
    title: 'Wide Range of Vehicles',
    description:
      'We have a ranged fleet of rental cars to meet your needs and preferences. From economy cars to luxury SUVs, we have the right vehicle for every occasion and budget.',
    image: offerCar,
    background: 'bg-[#FDECEC]',
    linkText: 'Check out our cars',
    icon: <AiOutlineCar className={offerIconClasses} />,
    link: '/',
  },

  {
    title: 'Flexible Rental Options',
    description:
      "We understand that every customer has unique rental needs, that's why we offer flexible rental options, including hourly and  daily options. We also offer long-term rental options on special request for customers who need a car for an extended period of time.",
    image: offerCar,
    background: 'bg-[#FDECEC]',
    linkText: 'Check out our cars',
    icon: <AiOutlineCar className={offerIconClasses} />,
    link: '/',
  },

  {
    title: 'Competitive Pricing',
    description:
      'We want you to have the most affordable and stress-free rental experience possible. So why wait? Book your rental with us today and enjoy a fun and affordable road trip with Oxtra!',
    image: pricing,
    background: 'bg-[#FFFFEB]',
    linkText: 'Check out our cars',
    icon: <TbPlaneTilt className={offerIconClasses} />,
    link: '/',
  },
];

const Offer = () => {
  return (
    <Container>
      <div className='mt-[234px] text-center mb-[120px]'>
        <div className='text-brandGray-300 mb-20'>
          <Typography as='h2' font='font-gordita-bold'>
            What we offer
          </Typography>
        </div>
        <div className='grid grid-cols-3 gap-10  mx-auto'>
          {offers.map((offer) => {
            return (
              <div
                key={offer.title}
                className={`flex flex-col rounded-xl items-center p-6 border border-brandGray-100`}
              >
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={400}
                  height={400}
                  className='rounded-xl'
                />

                <div className='my-6 text-brandGray-300'>
                  <Typography as='small' font='font-gordita-medium'>
                    {offer.title}
                  </Typography>
                </div>
                <div className='mb-6 text-brandGray-100'>
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
    </Container>
  );
};

export default Offer;
