import React from 'react';
import CompanyHero from '@/components/CompanyHero';
import Offer from '@/components/Offer';
import TrustedPartners from '@/components/TrustedPartners';
import Team from '@/components/Team';
import PassiveIncome from '@/components/PassiveIncome';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Image from 'next/image';
import cloud from '../public/assets/backCar.png';
import pink from '../public/assets/pink.png';
import blue from '../public/assets/Ellipse 729.png';
import moneyBag from '../public/assets/image 35.png';
import halfCar from '../public/assets/image 32.png';
import car from '../public/assets//Frame.png';
import backcar from '../public/assets/backCar.png';

const Company = () => {
  const activePage = 'Company';
  return (
    <div className='relative overflow-hidden'>
      <CompanyHero activePage={activePage} />
      <Offer />
      <TrustedPartners />
      <Team />

      <PassiveIncome />

      <Experience />
      <Footer />

      <Image
        src={blue}
        width={600}
        height={600}
        alt='blue'
        className='top-[7rem] absolute left-0'
      />

      <Image
        src={backcar}
        width={100}
        height={100}
        alt='blue'
        className='top-[34rem] absolute left-0'
      />

      <Image
        src={pink}
        width={800}
        height={800}
        alt='pink'
        className='top-[-11rem] absolute right-[-13rem]'
      />

      <Image
        src={halfCar}
        width={100}
        height={100}
        alt='pink'
        className='top-[4rem] absolute right-0'
      />

      <Image
        src={blue}
        width={600}
        height={600}
        alt='blue'
        className='bottom-[1520px] rotate-180 absolute right-[0]'
      />
      <Image
        src={car}
        width={300}
        height={200}
        alt='blue'
        className='top-[39rem] absolute right-[8rem]'
      />

      <Image
        src={pink}
        width={750}
        height={750}
        alt='pink'
        className='bottom-[960px] absolute right-0'
      />

      <Image
        src={moneyBag}
        width={200}
        height={200}
        alt='car1'
        className='bottom-[2112px] absolute left-0 2xl:left-[7rem] '
      />

      <Image
        src={blue}
        width={600}
        height={600}
        alt='blue'
        className='bottom-[39rem] absolute left-[0]'
      />
    </div>
  );
};

export default Company;
