import React from 'react';
import Typography from '../Typography';

const FindPreferredCar = () => {
  return (
    <div className='flex justify-center'>
      <div className='bg-white absolute box-shadow w-[1165px] top-[529px]  p-6'>
        <div>
          <div className='text-brandGray-300 mb-[26px]'>
            <Typography as='h6' weight='font-medium'>
              Find your preferred car now
            </Typography>
          </div>
          <div className='flex gap-[26px]'>
            <div className='text-brandGreen-300'>
              <Typography as='xsmall' weight='font-medium'>
                Daily trip
              </Typography>
            </div>
            <div className='text-brandGray-100'>
              <Typography as='xsmall' weight='font-normal'>
                Hourly trip
              </Typography>
            </div>
          </div>
        </div>

        <form
          action='
      '
          className='flex justify-between items-center'
        >
          <div>
            <label htmlFor=''>Pick up location</label>
            <input
              type='text'
              placeholder='Enter address or airport'
              className='px-2 py-2'
            />
          </div>
          <div>
            <label htmlFor='pick up Date'>Pick up Date</label>
            <input
              type='date'
              id='pick up Date'
              placeholder='Enter address or airport'
              className='px-2 py-2'
              name='pick up Date'
            />
          </div>
          <div>
            <label htmlFor=''>Time</label>
            <input type='time' id='appt' name='appt' className='px-2 py-2' />
          </div>
          <div>
            <label htmlFor=''>Number of Days</label>
            <input type='number' />
          </div>
          <div>
            <label htmlFor=''>Return Date & Time</label>
            <input type='text' />
          </div>
          <div className='bg-brandGreen-300'>search</div>
        </form>
      </div>
    </div>
  );
};

export default FindPreferredCar;
