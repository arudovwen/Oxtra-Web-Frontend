import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Image from 'next/image';
import car from '../public/assets/honda.png';
import seats from '../public/assets/seats.png';
import classNames from 'classnames';
import ac from '../public/assets/ac.png';
import Button from '@/components/Button';
import AlterFooter from '@/components/Footers/AlterFooter';
import auto from '../public/assets/automatic.png';
import { TbPointFilled, TbPoint } from 'react-icons/tb';
import fuel from '../public/assets/GasPump.png';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { rentVehicle } from '@/services/vehicleservices';

const blockClasses = classNames(
  `border   border-[#d4d6d8] p-5 rounded-lg mb-[24px]`
);

const tripClasses = classNames(
  `text-[12px] font-gordita-regular leading-[12px] text-brandGray-300`
);

const inputClasses = classNames(
  'px-2 py-2 border border-[#d4d6d8] rounded-lg mt-3  w-full'
);

const labelClasses = classNames(
  'font-gordita-medium text-brandGray-100 text-sm'
);

const offers = [
  {
    name: 'Daily trips are 8am - 8pm',
  },
  {
    name: 'Personal Accident Protection',
  },
  {
    name: 'Loss Damage Waiver',
  },
  {
    name: ' Comprehensive insurance',
  },
  {
    name: 'Includes Unlimited Free Kilometers',
  },
];

const carFeatures = [
  {
    feature: '5 Seats',
    icon: seats,
  },
  {
    feature: 'Automatic',
    icon: auto,
  },
  {
    feature: 'Air conditioning',
    icon: ac,
  },
  {
    feature: 'Fuel Unlimited',
    icon: fuel,
  },
];

const SingleCar = () => {
  const activePage = 'singlecar';

  const router = useRouter();

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
    <div>
      <Container>
        <Navigation
          color='text-brandGray-300'
          hover='hover:text-brandGreen-300'
          buttonBg='bg-brandGreen-300'
          buttonText='text-white'
          buttonHover='hover:bg-white'
          activePage={activePage}
          navBackground='white'
          menuColor='text-brandGreen-300'
        />

        <div
          className='text-brandGray-500 flex items-center mb-5 gap-[399px] mt-8
'
        >
          <span
            className='cursor-pointer text-sm font-gordita-medium flex items-center gap-2'
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft className='text-brandGray-500  w-[22px] h-[22px]' />
            Back
          </span>
          <div>
            <Typography as='h4' font='font-gordita-bold'>
              Trip Breakdown
            </Typography>
          </div>
        </div>
        <div className='border-t-4 my-5 border-brandGray-500'></div>
        <div className='flex gap-[40px] mb-[31px]'>
          <div className={`${blockClasses}, w-1/2 h-full`}>
            <div className='flex gap-[40px]'>
              <Image
                src={car}
                height={261}
                width={192}
                alt='car'
                className='rounded-lg'
              />
              <div>
                <div className='mb-6'>
                  <Typography as='h6' font='font-gordita-medium'>
                    Honda CR-V (2015)
                  </Typography>
                </div>
                {carFeatures.map((feature) => {
                  return (
                    <div
                      key={feature.feature}
                      className='text-base flex gap-[13.33px] mb-4 text-brandGreen-300 font-gordita-medium'
                    >
                      <Image
                        src={feature.icon}
                        alt={feature.feature}
                        width={12.14}
                        height={13.33}
                      />
                      <span>{feature.feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <form className='w-1/2' onSubmit={handleSubmit}>
            <div className={blockClasses}>
              <div className='flex gap-[40px] mb-[20px]'>
                <div className='w-3/4'>
                  <label htmlFor='Pick up location' className={labelClasses}>
                    Pick up location
                  </label>
                  <input
                    type='text'
                    placeholder='Enter address or airport'
                    className={inputClasses}
                    required
                    onChange={(e) => setPickupLocation(e.target.value)}
                  />
                </div>
                <div className='w-1/4'>
                  <label htmlFor='pick up Date' className={labelClasses}>
                    Pick up Date
                  </label>
                  <input
                    type='date'
                    id='pick up Date'
                    className={`${inputClasses}  uppercase`}
                    name='pick up Date'
                    required
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                </div>
              </div>

              <div className='mt-6 flex gap-[32px] mb-[35.5px]'>
                <div className='flex gap-1 items-center'>
                  {dailyTrip ? (
                    <TbPoint
                      className='w-5 h-5 cursor-pointer'
                      onClick={() => setDailyTrip(false)}
                    />
                  ) : (
                    <TbPointFilled className='w-5 h-5 text-[#438950]' />
                  )}

                  <span
                    className=' font-gordita-regular
                     text-[12px] text-brandGray-300 leading-[12px]'
                  >
                    Hourly trip
                  </span>
                </div>
                <div className='flex h-5 gap-1 items-center'>
                  {dailyTrip ? (
                    <TbPointFilled className='w-5 h-5 text-[#438950]' />
                  ) : (
                    <TbPoint
                      className='w-5 h-5 cursor-pointer'
                      onClick={() => setDailyTrip(true)}
                    />
                  )}
                  <span
                    className=' font-gordita-regular
                     text-[12px] text-brandGray-300 leading-[12px]'
                  >
                    Daily trip
                  </span>
                </div>
              </div>

              <div className='flex justify-between mb-[20px]'>
                <div className='flex gap-[40px]'>
                  {!dailyTrip ? (
                    <div className='w-1/3'>
                      <label htmlFor='Number of Hours' className={labelClasses}>
                        Number of Hours
                      </label>
                      <input
                        type='number'
                        className={inputClasses}
                        required
                        onChange={(e) => setHours(e.target.value)}
                      />
                    </div>
                  ) : (
                    <div className='w-1/3'>
                      <label htmlFor='Number of Days' className={labelClasses}>
                        Number of Days
                      </label>
                      <input
                        type='number'
                        className={inputClasses}
                        required
                        onChange={(e) => setDays(e.target.value)}
                      />
                    </div>
                  )}
                  <div className='w-1/4'>
                    <label htmlFor='Time' className={labelClasses}>
                      Pick up Time
                    </label>
                    <input
                      type='time'
                      className={inputClasses}
                      name='Time'
                      required
                      onChange={(e) => setPickupTime(e.target.value)}
                    />
                  </div>
                </div>

                <span className='text-brandGray-300'>
                  <Typography as='p' font='font-gordita-medium'>
                    N25,000
                  </Typography>
                </span>
              </div>
              <div className='flex justify-between text-brandGray-300 items-center mb-[20px]'>
                <div className=''>
                  <Typography as='p' font='font-gordita-medium'>
                    Insurance: Free
                  </Typography>
                </div>
                <span>
                  <Typography as='p' font='font-gordita-medium'>
                    N0.00
                  </Typography>
                </span>
              </div>

              <div className='bg-brandGray-200 text-brandGray-300 p-6 rounded-lg mb-[20px]'>
                <h2 className='text-[24px] mb-4 leading-[24px] font-gordita-medium '>
                  Your offer
                </h2>{' '}
                <ul>
                  {offers.map((offer) => {
                    return (
                      <li
                        key={offer.name}
                        className='flex gap-2 items-center mb-1 text-[14px] leading-[21.8px] font-gordita-regular'
                      >
                        <span
                          className='text-[10px]
                '
                        >
                          ●
                        </span>{' '}
                        {offer.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='flex justify-between text-brandGray-300 items-center'>
                <span>
                  <Typography as='p' font='font-gordita-medium'>
                    Total
                  </Typography>
                </span>

                <span>
                  <Typography as='h4' font='font-gordita-medium'>
                    N37,500
                  </Typography>
                </span>
              </div>
            </div>
            <Button
              bg='bg-brandGreen-300'
              hover='hover:bg-brandGray-200'
              textColor='text-white'
              width={true}
              size='text-sm'
              type='submit'
            >
              Continue
            </Button>
          </form>
        </div>
      </Container>
      <AlterFooter />
    </div>
  );
};

export default SingleCar;
