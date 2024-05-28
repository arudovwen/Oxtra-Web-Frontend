import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import Navigation from './Navigation';
import Container from './Container';
import Image from 'next/image';
//import heroBackground from '../../../public/assets/herobackground.png';
import heroBackground from '../../public/assets/herobackground.png';
// import SideBar from './AuthLayout/SideBar';

const NonAuthLayout = ({ children, page }: any) => {
  console.log('page', page);
  return (
    <div className=''>
      {/* <Image
        src={heroBackground}
        alt='backgorund image'
        className='absolute inset-0 -z-10 h-full w-full object-cover'
        fillta
      /> */}
      <div className={`${page === 'home' ? 'bg-custom-gradient' : 'bg-white'}`}>
        <Container className='relative'>
          <Navigation
            color={`${page === 'home' ? 'text-white' : 'text-brandGray-300'}`}
            hover='hover:text-brandGreen-100'
            buttonBg='bg-white'
            buttonHover='hover:bg-brandGreen-300'
            buttonText='text-brandGray-300'
            activePage={page}
            navBackground='green'
            menuColor={`${page === 'Home' ? 'text-white' : 'text-brandGreen-300'}`}
          />
        </Container>
      </div>
      {children}
    </div>
  );
};

export default NonAuthLayout;
