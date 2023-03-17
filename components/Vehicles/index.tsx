import React from 'react';
import Typography from '../Typography';
import { useState } from 'react';

const vehicles = [
  {
    name: 'Sedan',
  },
  {
    name: 'Coupe',
  },
  {
    name: 'SUV',
  },
  {
    name: 'Luxury',
  },
  {
    name: 'Haulage',
  },
];

const Vehicles = () => {
  const [activeVehicle, setActiveVehicle] = useState('Sedan');
  return (
    <div className=' text-brandGray-300 text-center mb-[120px]'>
      <div className=' mb-12 w-[643px] mx-auto'>
        <Typography as='h2L' font='font-gordita-bold'>
          Our vehicles are <br />
          ready to take you around town
        </Typography>
      </div>
      <div className=' w-[643px] mx-auto mb-8'>
        <Typography as='xsmallL' font='font-gordita-regular'>
          We give our riders the best driving experience from our world-class
          drivers to the quality checks we put our cars through
        </Typography>
      </div>
      <div className='flex justify-center gap-6'>
        {vehicles.map((vehicle) => {
          return (
            <div
              key={vehicle.name}
              className={`${
                activeVehicle === vehicle.name
                  ? 'bg-brandGreen-300 text-white'
                  : 'bg-brandGray-200 text-[#444444]'
              } rounded-[60px] px-6 py-3 cursor-pointer`}
            >
              <Typography as='xxsmall' font='font-gordita-medium'>
                {vehicle.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vehicles;
