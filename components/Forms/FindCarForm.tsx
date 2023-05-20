import React from 'react';
import classNames from 'classnames';
import { GoSearch } from 'react-icons/go';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { SyntheticEvent } from 'react';
import { rentVehicle } from '@/services/vehicleservices';

const inputClasses = classNames(
  'px-2 py-2 border rounded-sm border-[#d4d6d8] mt-3  w-full h-[40px]'
);

const labelClasses = classNames(
  'font-gordita-medium text-brandGray-300 text-xs lg:text-sm'
);

const FindCarForm = () => {
  const [pickup_location, setPickupLocation] = useState('');
  const [pickup_date, setPickupDate] = useState('');
  const [trip_type, setTripType] = useState('5');
  const [hours, setHours] = useState('');
  const [pickup_time, setPickupTime] = useState('');
  const [price, setPrice] = useState('5');
  const [fee, setFee] = useState('4');
  const [days, setDays] = useState('4');
  const [vehicle_id, setVehicleId] = useState('9');
  const [dailyTrip, setDailyTrip] = useState(false);

  const { token } = useAuth();

  const config = { headers: { Authorization: `Bearer ${token}` } };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const rentVehicleInfo = {
      pickup_location,
      pickup_date,
      hours,
      pickup_time,
      price,
      fee,
      vehicle_id,
      trip_type,
    };

    rentVehicle(rentVehicleInfo, config)
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      action='
      '
      className='grid grid-cols-12 gap-[20px]'
    >
      <div className='col-span-full xl:col-span-3'>
        <label htmlFor='Pick up location' className={labelClasses}>
          Pick up location
        </label>
        <input
          type='text'
          placeholder='Enter address or airport'
          className={inputClasses}
        />
      </div>
      <div className='col-span-6 xl:col-span-2'>
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
      <div className='col-span-6 xl:col-span-2'>
        <label htmlFor='Time' className={labelClasses}>
          Time
        </label>
        <input type='time' className={inputClasses} name='Time' />
      </div>
      <div className='col-span-6 xl:col-span-2 z-10'>
        <label htmlFor='Number of Days' className={labelClasses}>
          Number of Days
        </label>
        <input type='number' className={inputClasses} />
      </div>
      <div className='col-span-6 xl:col-span-2 z-10'>
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
      <div className='bg-brandGreen-300 text-white py-6 flex flex-col items-center justify-center  col-span-full xl:col-auto rounded cursor-pointer'>
        <GoSearch className='w-[26px] h-[26px]' />
      </div>
    </form>
  );
};

export default FindCarForm;
