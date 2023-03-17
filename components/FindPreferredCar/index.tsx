import React from 'react';
import Typography from '../Typography';
import { ImIcoMoon } from 'react-icons/im';
import { GoSearch } from 'react-icons/go';

import classNames from 'classnames';

const FindPreferredCar = () => {
  const inputClasses = classNames(
    'px-2 py-2 border border-brandGray-300 mt-3 opacity-50 w-full'
  );

  return (
    <div className='flex justify-center '>
      <div className='bg-white absolute box-shadow w-[1164px] top-[529px]  p-6'>
        <div>
          <div className='text-brandGray-300 mb-[26px]'>
            <Typography as='h6' font='font-gordita-medium'>
              Find your preferred car now
            </Typography>
          </div>
          <div className='flex gap-[26px] mb-[26px]'>
            <div className='text-brandGreen-300 flex items-center gap-2.5'>
              <ImIcoMoon />
              <Typography as='xsmall' font='font-gordita-medium'>
                Daily trip
              </Typography>
            </div>
            <div className='text-brandGray-100 flex items-center gap-2.5'>
              <ImIcoMoon />
              <Typography as='xsmall' font='font-gordita-regular'>
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
            <label htmlFor='Pick up location' className='text-brandGray-300'>
              <Typography as='xxsmall' font='font-gordita-medium'>
                Pick up location
              </Typography>
            </label>
            <input
              type='text'
              placeholder='Enter address or airport'
              className={inputClasses}
            />
          </div>
          <div className='w-[20%]'>
            <label htmlFor='pick up Date' className='text-brandGray-300'>
              <Typography as='xxsmall' font='font-gordita-medium'>
                Pick up Date
              </Typography>
            </label>
            <input
              type='date'
              id='pick up Date'
              className={`${inputClasses}  uppercase`}
              name='pick up Date'
            />
          </div>
          <div>
            <label htmlFor='Time' className='text-brandGray-300'>
              <Typography as='xxsmall' font='font-gordita-medium'>
                Time
              </Typography>
            </label>
            <input type='time' className={inputClasses} name='Time' />
          </div>
          <div className='w-[13%]'>
            <label htmlFor='Number of Days' className='text-brandGray-300'>
              <Typography as='xxsmall' font='font-gordita-medium'>
                Number of Days
              </Typography>
            </label>
            <input type='number' className={inputClasses} />
          </div>
          <div className='w-[20%]'>
            <label htmlFor='Return Date & Time' className='text-brandGray-300'>
              <Typography as='xxsmall' font='font-gordita-medium'>
                Return Date & Time
              </Typography>
            </label>
            <input
              type='datetime-local'
              id='meeting-time'
              name='meeting-time'
              className={`${inputClasses}  uppercase`}
            />
          </div>
          <div className='bg-brandGreen-300 text-white p-6 rounded'>
            <GoSearch className='w-[26px] h-[26px]' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindPreferredCar;
