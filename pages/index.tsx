import { Inter } from 'next/font/google';

import Hero from '@/components/Hero';
import FindPreferredCar from '@/components/FindPreferredCar';
import Offers from '@/components/Offers';
import Vehicles from '@/components/Vehicles';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Hero />
      <FindPreferredCar />
      <Offers />
      <Vehicles />
    </div>
  );
}
