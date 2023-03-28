import React from 'react';
import Navigation from '../Navigation';
import Container from '../Container';
import AlterFooter from '../Footer/AlterFooter';
import Typography from '@/components/Typography';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { TbCircleNumber1 } from 'react-icons/tb';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface PutUpYourVehicleLayoutProps {
  children: React.ReactNode;
  putYourVehicleLayoutActivePage: string;
}

const nav = [
  {
    name: 'Basic information',
  },
  {
    name: 'Vehicle',
  },
  {
    name: 'Documents',
  },
];

const PutUpYourVehicleLayout = ({
  children,
  putYourVehicleLayoutActivePage,
}: PutUpYourVehicleLayoutProps) => {
  const activePage = 'Put up your vehicle';

  const router = useRouter();

  return (
    <div className='text-brandGray-500 '>
      <Container>
        <Navigation
          color='text-brandGray-300'
          hover='hover:text-brandGreen-300'
          buttonBg='bg-brandGreen-300'
          buttonText='text-white'
          buttonHover='hover:bg-white'
          activePage={activePage}
          navBackground='white'
        />

        <div className='relative mx-auto max-w-[500px] mt-[29px] flex justify-between'>
          {nav.map((n, index) => {
            return (
              <div
                key={n.name}
                className={`text-sm flex items-center gap-2 ${
                  putYourVehicleLayoutActivePage === n.name
                    ? 'text-brandGreen-300 font-gordita-medium'
                    : 'font-gordita-regular'
                }`}
              >
                <span
                  className={`w-[32px]  h-[32px] rounded-full items-center text-white flex justify-center ${
                    putYourVehicleLayoutActivePage === n.name
                      ? 'bg-brandGreen-300'
                      : 'bg-[#B3B3B3]'
                  }`}
                >
                  {index + 1}
                </span>{' '}
                <span>{n.name}</span>
              </div>
            );
          })}
          <span
            className='absolute cursor-pointer left-[-195px] text-sm font-gordita-medium flex items-center gap-2'
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft className='text-brandGray-500  w-[22px] h-[22px]' />
            Back
          </span>
        </div>

        {children}
      </Container>
      <AlterFooter />
    </div>
  );
};

export default PutUpYourVehicleLayout;
