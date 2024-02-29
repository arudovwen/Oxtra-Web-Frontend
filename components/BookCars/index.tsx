import React from 'react';
import honda from '../../public/assets/honda.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { getVehicles } from '@/services/vehicleservices';
import Button from '../Button';
import { useAuth } from '@/hooks/useAuth';

const cars = [
  {
    id: 1,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/singlecar',
  },
  {
    id: 2,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/singlecar',
  },
  {
    id: 3,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/singlecar',
  },
  {
    id: 4,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/singlecar',
  },
  {
    id: 5,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/singlecar',
  },
  {
    id: 6,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/singlecar',
  },
  {
    id: 7,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/singlecar',
  },
  {
    id: 8,
    name: 'Honda CR-V (2015)',
    image: honda,
    location: 'Lagos',
    price: 4680,
    link: '/singlecar',
  },
];

const BookCars = () => {
  const { token } = useAuth();
  const [vehicles, setVehicles] = useState([]);

  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    getVehicles(config)
      .then((res) => {
        setVehicles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] mb-[120px]'>
      {cars.map((car) => {
        return (
          <div key={car.id} className='text-brandGray-300'>
            <Image src={car.image} width={690} height={198} alt={car.name} />

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
                link={car.link}
                hover='hover:bg-white'
                width={true}
                textColor='text-white'
                size='text-sm'
              >
                <span className='text-center gap-4'>Book now</span>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookCars;
