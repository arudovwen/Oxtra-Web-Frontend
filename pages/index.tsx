import { Inter } from 'next/font/google';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import FindPreferredCar from '@/components/FindPreferredCar';
import Services from '@/components/Services';
import Vehicles from '@/components/Vehicles';
import PassiveIncome from '@/components/PassiveIncome';
import TrustedPartners from '@/components/TrustedPartners';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const activePage = 'Home';

  const margin = 'mb-[120px]';
  return (
    <>
      <Hero activePage={activePage} />
      <FindPreferredCar />
      <Services />
      <Vehicles />
      <PassiveIncome marginBottom={margin} />
      <TrustedPartners marginBottom={margin} />
      <Experience marginBottom={margin} />
      <Footer />
    </>
  );
}
