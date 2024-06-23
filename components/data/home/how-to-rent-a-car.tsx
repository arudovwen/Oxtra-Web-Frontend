// import React, { useState, useEffect } from 'react';
// import Container from '@/layout/NonAuthLayout/Container';
// import imageone from '../../../public/assets/home-animation-images/image-one.png';
// import imageTwo from '../../../public/assets/home-animation-images/image-two.png';
// import imageThree from '../../../public/assets/home-animation-images/image-three.png';
// import pay from '../../../public/assets/home-animation-images/pay.png';
// import dates from '../../../public/assets/home-animation-images/dates.png';
// import car from '../../../public/assets/home-animation-images/car.png';
// import Typography from '@/components/constants/Typorgraphy';
// import { BsArrowRight } from 'react-icons/bs';
// import Button from '@/components/constants/Button';
// import animatedCar from '../../../public/assets/Frame.png';
// import green from '../../../public/assets/blue.png';
// import Image from 'next/image';

// const procedures = [
//   {
//     name: 'Select preferred dates',
//     image1: imageone,
//     content:
//       'Our book module allows you to pick your preferred trip dates to get vehicles available for your schedule.',
//     image2: dates,
//   },
//   {
//     name: 'Select preferred vehicle',
//     image1: imageTwo,
//     content:
//       'Your desired vehicle awaits you to ride in style and comfort to your destination. Choose from our fleet.',
//     image2: car,
//   },
//   {
//     name: 'Pay and get your car',
//     image1: imageThree,
//     content:
//       'Make payment for your booking, get a confirmation notification from us and await the vehicle at your doorstep',
//     image2: pay,
//   },
// ];

// const HowToRentaCar = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % procedures.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentItem = procedures[currentIndex];
//   return (
//     <Container
//       marginBottom='mb-[120px]'
//       className='relative pt-[452px] sm:pt-[521px]  lg:pt-[260px] xl:pt-[200px]'
//     >
//       <Image
//         data-aos='slide-right'
//         src={animatedCar}
//         width={140}
//         height={100}
//         alt='car'
//         className='top-20 hidden xl:block absolute left-20 h-auto'
//       />
//       <div className='text-center text-brandGray-300 mb-[44px] md:mb-[9rem]'>
//         <Typography as='h3' font='font-gordita-bold'>
//           How to rent a car on Oxtra
//         </Typography>
//       </div>
//       <div className='flex flex-col md:flex-row items-center md:h-[408px] justify-center gap-8 mb-[24px] md:mb-[154px]'>
//         <div className='flex items-center gap-[24px]'>
//           <Image src={currentItem.image1} alt={currentItem.name} priority />
//           <div className='md:w-[360px] '>
//             <div className='mb-[16px]'>
//               <Typography as='h5' font='font-gordita-bold'>
//                 {currentItem.name}
//               </Typography>
//             </div>
//             <p className='font-gordita-regular   text-[16px] text-brandGray-300 leading-[21px]'>
//               {currentItem.content}
//             </p>
//           </div>
//         </div>

//         <div className='w-[560px] hidden md:block '>
//           <Image priority src={currentItem.image2} alt={currentItem.name} />
//         </div>
//       </div>

//       <div className='flex justify-center'>
//         <Button
//           data-aos='fade-up'
//           data-aos-duration='700'
//           data-aos-once='true'
//           bg='bg-brandGreen-300'
//           hover='hover:bg-brandGray-200'
//           textColor='text-white'
//           width={false}
//           size='text-sm'
//           link='rent-a-car'
//         >
//           <div className='flex items-center  gap-4'>
//             <span>Find a vehicle</span>
//             <span>
//               <BsArrowRight />
//             </span>
//           </div>
//         </Button>
//       </div>

//       <Image
//         src={green}
//         width={1000}
//         height={1000}
//         alt='pink'
//         className='right-[44rem]  hidden xl:block top-[17rem] absolute opacity-70'
//       />

//       <Image
//         src={green}
//         width={1000}
//         height={1000}
//         alt='pink'
//         className='right-[-36rem]  hidden xl:block top-[-14rem] absolute opacity-70'
//       />
//     </Container>
//   );
// };

// export default HowToRentaCar;

import React, { useState, useEffect } from 'react';
import Container from '@/layout/NonAuthLayout/Container';
import imageone from '../../../public/assets/home-animation-images/image-one.png';
import imageTwo from '../../../public/assets/home-animation-images/image-two.png';
import imageThree from '../../../public/assets/home-animation-images/image-three.png';
import pay from '../../../public/assets/home-animation-images/pay.png';
import dates from '../../../public/assets/home-animation-images/dates.png';
import car from '../../../public/assets/home-animation-images/car.png';
import Typography from '@/components/constants/Typorgraphy';
import { BsArrowRight } from 'react-icons/bs';
import Button from '@/components/constants/Button';
import animatedCar from '../../../public/assets/Frame.png';
import green from '../../../public/assets/blue.png';
import Image from 'next/image';

const procedures = [
  {
    name: 'Select preferred dates',
    image1: imageone,
    content:
      'Our book module allows you to pick your preferred trip dates to get vehicles available for your schedule.',
    image2: dates,
  },
  {
    name: 'Select preferred vehicle',
    image1: imageTwo,
    content:
      'Your desired vehicle awaits you to ride in style and comfort to your destination. Choose from our fleet.',
    image2: car,
  },
  {
    name: 'Pay and get your car',
    image1: imageThree,
    content:
      'Make payment for your booking, get a confirmation notification from us and await the vehicle at your doorstep',
    image2: pay,
  },
];

const HowToRentaCar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % procedures.length);
        setIsAnimating(false);
      }, 500); // duration of the fade-out transition
    }, 3000); // interval time for changing content

    return () => clearInterval(interval);
  }, []);

  const currentItem = procedures[currentIndex];
  return (
    <Container
      marginBottom='mb-[120px]'
      className='relative pt-[452px] sm:pt-[521px] lg:pt-[260px] xl:pt-[200px]'
    >
      <Image
        data-aos='slide-right'
        src={animatedCar}
        width={140}
        height={100}
        alt='car'
        className='top-20 hidden xl:block absolute left-20 h-auto'
      />
      <div className='text-center text-brandGray-300 mb-[44px] md:mb-[9rem]'>
        <Typography as='h3' font='font-gordita-bold'>
          How to rent a car on Oxtra
        </Typography>
      </div>
      <div className='flex transition-opacity duration-500 ease-in-out transform flex-col md:flex-row items-center md:h-[408px] justify-center gap-8 mb-[24px] md:mb-[154px]'>
        <div key={currentItem.name} className={`flex items-center gap-[24px] `}>
          <Image src={currentItem.image1} alt={currentItem.name} priority />
          <div className='md:w-[360px]'>
            <div className='mb-[16px]'>
              <Typography as='h5' font='font-gordita-bold'>
                {currentItem.name}
              </Typography>
            </div>
            <p className='font-gordita-regular text-[16px] text-brandGray-300 leading-[21px]'>
              {currentItem.content}
            </p>
          </div>
        </div>

        <div key={currentItem.image2} className={`w-[560px] hidden md:block  `}>
          <Image priority src={currentItem.image2} alt={currentItem.name} />
        </div>
      </div>

      <div className='flex justify-center'>
        <Button
          data-aos='fade-up'
          data-aos-duration='700'
          data-aos-once='true'
          bg='bg-brandGreen-300'
          hover='hover:bg-brandGray-200'
          textColor='text-white'
          width={false}
          size='text-sm'
          link='rent-a-car'
        >
          <div className='flex items-center gap-4'>
            <span>Find a vehicle</span>
            <span>
              <BsArrowRight />
            </span>
          </div>
        </Button>
      </div>

      <Image
        src={green}
        width={1000}
        height={1000}
        alt='pink'
        className='right-[44rem] hidden xl:block top-[17rem] absolute opacity-70'
      />

      <Image
        src={green}
        width={1000}
        height={1000}
        alt='pink'
        className='right-[-36rem] hidden xl:block top-[-14rem] absolute opacity-70'
      />
    </Container>
  );
};

export default HowToRentaCar;
