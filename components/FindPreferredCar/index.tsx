import React from 'react';
import Typography from '../Typography';
import { ImIcoMoon } from 'react-icons/im';
import { GoSearch } from 'react-icons/go';
import classNames from 'classnames';

const inputClasses = classNames(
  'px-2 py-2 border border-[#d4d6d8] mt-3  w-full'
);

const labelClasses = classNames(
  'font-gordita-medium text-brandGray-300 text-sm'
);

const FindPreferredCar = () => {
  return (
    <div className='flex justify-center mb-[234px]'>
      <div className='bg-white absolute box-shadow w-[1164px] top-[529px]  p-6'>
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

        <form
          action='
      '
          className='flex gap-5'
        >
          <div className='w-[37%]'>
            <label htmlFor='Pick up location' className={labelClasses}>
              Pick up location
            </label>
            <input
              type='text'
              placeholder='Enter address or airport'
              className={inputClasses}
            />
          </div>
          <div className='w-[20%]'>
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
          <div>
            <label htmlFor='Time' className={labelClasses}>
              Time
            </label>
            <input type='time' className={inputClasses} name='Time' />
          </div>
          <div className='w-[13%]'>
            <label htmlFor='Number of Days' className={labelClasses}>
              Number of Days
            </label>
            <input type='number' className={inputClasses} />
          </div>
          <div className='w-[20%]'>
            <label htmlFor='Return Date & Time' className={labelClasses}>
              Return Date & Time
            </label>
            <input
              type='datetime-local'
              id='meeting-time'
              name='meeting-time'
              className={`${inputClasses}  uppercase`}
            />
          </div>
          <div className='bg-brandGreen-300 text-white p-6 rounded cursor-pointer'>
            <GoSearch className='w-[26px] h-[26px]' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindPreferredCar;
