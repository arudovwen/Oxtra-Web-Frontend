import React from 'react';
import honda from '../../public/assets/honda.png';
import Image from 'next/image';
import Typography from '../Typography';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import Button from '../Button';

const cars = [
  {
    id: 1,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/',
  },
  {
    id: 2,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/',
  },
  {
    id: 3,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/',
  },
  {
    id: 4,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/',
  },
  {
    id: 5,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/',
  },
  {
    id: 6,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/',
  },
  {
    id: 7,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/',
  },
  {
    id: 8,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/',
  },
];

const BookCars = () => {
  return (
    <div className='grid grid-cols-4 gap-[40px] mb-[120px]'>
      {cars.map((car) => {
        return (
          <div key={car.id} className='text-brandGray-300'>
            <Image src={car.image} width={290} height={198} alt={car.name} />
            <div className='bg-[#F4F6F8] p-4'>
              <h5 className='mb-4 text-sm font-gordita-bold'>{car.name}</h5>
              <div className='flex justify-between mb-4'>
                <div className='text-brandGreen-300 flex gap-1 font-gordita-regular text-sm'>
                  <HiOutlineLocationMarker />
                  {car.location}
                </div>
                <span className='font-gordita-regular text-base'>
                  N{car.price}/hour
                </span>
              </div>

              <Button
                bg='bg-brandGreen-300'
                link='/'
                hover='hover:bg-white'
                width={true}
                textColor='text-white'
              >
                <span className='text-center gap-4 text-sm font-gordita-medium'>
                  Book now
                </span>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookCars;
