import Container from '@/layout/NonAuthLayout/Container';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RiArrowRightDownLine } from 'react-icons/ri';
import classNames from 'classnames';
import CarFeatures from '@/components/data/rent-a-car/booking/CarFeatures';
import CarBooking from '@/components/data/rent-a-car/booking/CarBooking';
import TripDetails from '@/components/data/rent-a-car/booking/TripDetails';
import Breakdown from '@/components/data/rent-a-car/booking/Breakdown';

const Bookings = () => {
  const activePage = 'Rent a car';

  const router = useRouter();
  const { car_name } = router.query;
  const [step, setStep] = useState(1);

  const [driverType, setDriverType] = useState("I'll drive by myself");
  const [availability, setAvailability] = useState(false);

  const dataClasses = classNames('text-[#242424] font-gordita-bold');

  const parClasses = classNames('flex items-center justify-between');

  return (
    <div className='font-gordita mb-[108px]'>
      <Container>
        <div className='mt-[40px] md:mt-[72px]'>
          <div className='flex items-center gap-[16px] w-fit font-gordita-medium text-[12px] md:text-[16px]'>
            <div className={`text-[#444648]`} onClick={() => router.push('/')}>
              Home
            </div>
            <div className='mb-[3px]'>
              <RiArrowRightDownLine />
            </div>
            <div onClick={() => router.push('/rent-a-car')} className='text-[#444648]'>
              Find Vehicle
            </div>
            <div className='mb-[3px]'>
              <RiArrowRightDownLine />
            </div>
            <div
              onClick={() => {
                setStep(2);
                setAvailability(false);
              }}
              className={`${step === 2 ? 'text-[#D4D4D4]' : 'text-[#444648] cursor-pointer'}`}
            >
              {car_name}
            </div>
            <div className={`${step === 3 ? 'flex' : 'hidden'} mb-[3px]`}>
              <RiArrowRightDownLine />
            </div>
            <div
              onClick={() => setStep(3)}
              className={`${
                step === 3 ? 'text-[#D4D4D4] flex' : 'text-[#444648] hidden cursor-pointer'
              }`}
            >
              Booking Details
            </div>
          </div>
        </div>

        <div
          className={`${
            step === 3 ? 'hidden' : 'flex'
          } mt-[24px] flex items-start md:flex-row flex-col gap-[40px]`}
        >
          <CarFeatures />

          <CarBooking
            setAvailability={setAvailability}
            availability={availability}
            car_name={car_name}
            setStep={setStep}
          />
        </div>

        <div
          className={`${
            step === 3 ? 'flex' : 'hidden'
          } flex-col md:flex-row items-start gap-[40px] mt-[32px]`}
        >
          <TripDetails
            setStep={setStep}
            setAvailability={setAvailability}
            dataClasses={dataClasses}
          />

          <Breakdown
            driverType={driverType}
            setDriverType={setDriverType}
            parClasses={parClasses}
            dataClasses={dataClasses}
          />
        </div>
      </Container>
    </div>
  );
};

export default Bookings;
