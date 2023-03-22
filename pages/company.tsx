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
import blue from '../public/assets/blue.png';

import halfCar from '../public/assets/heroCar.png';

import backcar from '../public/assets/Rectangle 100.png';
import Container from '@/components/Container';

const Company = () => {
  const activePage = 'Company';
  const margin = 'mb-[200px]';

  return (
    <div className='relative overflow-hidden'>
      <CompanyHero activePage={activePage} />
      <Offer />
      <TrustedPartners marginBottom={margin} />
      <Team marginBottom={margin} />

      <PassiveIncome marginBottom={margin} />
      <Experience marginBottom={margin} />
      <Footer />

      <Container>
        <div className='relative'>
          <Image
            src={blue}
            width={1400}
            height={1400}
            alt='blue'
            className='bottom-[3216px] absolute left-[-736px]'
          />
          <Image
            src={backcar}
            width={750}
            height={750}
            alt='car'
            className='bottom-[3768px] absolute left-[-670px]'
          />

          <Image
            src={blue}
            width={750}
            height={750}
            alt='blue'
            className='bottom-[2400px]
          absolute right-[-352px]'
          />
          <Image
            src={pink}
            width={750}
            height={750}
            alt='pink'
            className='bottom-[1248px] absolute right-[-304px]'
          />

          <Image
            src={blue}
            width={750}
            height={750}
            alt='blue'
            className='bottom-[1008px] absolute left-[-304px]'
          />

          <div className='relative'>
            <Image
              src={halfCar}
              width={500}
              height={500}
              alt='pink'
              className='bottom-[253rem] absolute right-[-432px]'
            />
            <Image
              src={pink}
              width={750}
              height={750}
              alt='pink'
              className='bottom-[242rem] absolute right-[-320px]'
              // className='bottom-[261rem] absolute right-[-17rem]'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Company;
