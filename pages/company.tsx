import React from 'react';
import CompanyHero from '@/components/data/company/CompanyHero';
import Offer from '@/components/data/company/Offer';
import Team from '@/components/data/company/Team';
import PassiveIncome from '@/components/data/home/PassiveIncome';
import Experience from '@/components/data/home/Experience';
import Footer from '@/layout/NonAuthLayout/Footers';
import MovingCar from '@/components/constants/MovingCar';
import Commitment from '@/components/data/company/Commitment';

const Company = () => {
  const margin = 'mb-[200px]';

  return (
    <div className='overflow-hidden'>
      <CompanyHero />
      <Offer />
      <Commitment marginBottom={margin} />
      <Team marginBottom={margin} />
      <PassiveIncome />
      <Experience marginBottom={margin} />
      <Footer />

      <MovingCar />
    </div>
  );
};

export default Company;
