import Experience from '@/components/data/home/Experience';
import Hero from '@/components/data/home/Hero';
import FindPreferredCar from '@/components/data/home/FindPreferredCar';
import Services from '@/components/data/home/Services';
import Vehicles from '@/components/data/home/Vehicles';
import PassiveIncome from '@/components/data/home/PassiveIncome';
import TrustedPartners from '@/components/data/home/TrustedPartners';
import Footer from '@/layout/NonAuthLayout/Footers';
import blue from '../public/assets/blue.png';
import Image from 'next/image';
import Container from '@/layout/NonAuthLayout/Container';
import pink from '../public/assets/pink.png';
import MovingCar from '@/components/constants/MovingCar';

export default function Home() {
  const activePage = 'Home';

  const margin = 'mb-[120px]';
  return (
    <div className='overflow-hidden'>
      <Hero activePage={activePage} />

      <FindPreferredCar />

      <Services />
      <Vehicles />
      <PassiveIncome marginBottom={margin} />
      <TrustedPartners marginBottom={margin} />
      <Experience marginBottom={margin} />
      <Footer />

      <Container>
        <div className='relative'>
          <Image
            src={blue}
            width={1000}
            height={1000}
            alt='blue'
            className='right-[-31rem] hidden xl:block top-[-204rem] absolute opacity-70'
          />
          <Image
            src={pink}
            width={1000}
            height={1000}
            alt='pink'
            className='left-[-31rem]  hidden xl:block top-[-162rem] absolute opacity-70'
          />
          <Image
            src={pink}
            width={1000}
            height={1000}
            alt='pink'
            className='right-[-31rem]  hidden xl:block top-[-114rem] absolute opacity-70'
          />
        </div>
      </Container>
      <MovingCar />
    </div>
  );
}
