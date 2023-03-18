import { Inter } from 'next/font/google';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import FindPreferredCar from '@/components/FindPreferredCar';
import Offers from '@/components/Offers';
import Vehicles from '@/components/Vehicles';
import PassiveIncome from '@/components/PassiveIncome';
import TrustedPartners from '@/components/TrustedPartners';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Hero />
      <FindPreferredCar />
      <Offers />
      <Vehicles />
      <PassiveIncome />
      <TrustedPartners />
      <Experience />
      <Footer />
    </>
  );
}
