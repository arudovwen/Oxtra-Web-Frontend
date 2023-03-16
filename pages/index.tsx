import { Inter } from 'next/font/google';

import Hero from '@/components/Hero';
import FindPreferredCar from '@/components/FindPreferredCar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Hero />
      <FindPreferredCar />
    </div>
  );
}
