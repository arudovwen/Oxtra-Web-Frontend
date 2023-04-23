import React from 'react';
import Typography from '../Typography';
import { ImIcoMoon } from 'react-icons/im';
import car from '../../public/assets/Frame.png';
import Image from 'next/image';
import FindCarForm from '../Forms/FindCarForm';

const FindPreferredCar = () => {
  return (
    <div className='flex justify-center mb-[512px] xl:mb-[234px] '>
      <div className='bg-white absolute box-shadow w-[90%]  xl:w-[1164px] top-[498px] lg:top-[529px]  p-6'>
        <div>
          <div className='text-brandGray-300 mb-[26px]'>
            <Typography as='h5' font='font-gordita-medium'>
              Find your preferred car now
            </Typography>
          </div>
          <div className='flex gap-[26px] mb-[26px]'>
            <div className='text-brandGreen-300 flex items-center gap-2.5'>
              <ImIcoMoon />
              <Typography as='p' font='font-gordita-medium'>
                Daily trip
              </Typography>
            </div>
            <div className='text-brandGray-100 flex items-center gap-2.5'>
              <ImIcoMoon />
              <Typography as='p' font='font-gordita-regular'>
                Hourly trip
              </Typography>
            </div>
          </div>
        </div>
        <FindCarForm />
        <Image
          src={car}
          width={300}
          height={200}
          alt='car'
          className='top-[247px] hidden xl:block absolute left-[-103px]'
        />
      </div>
    </div>
  );
};

export default FindPreferredCar;
