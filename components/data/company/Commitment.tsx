import React from 'react';
import Container from '@/layout/NonAuthLayout/Container';
import Typography from '@/components/constants/Typorgraphy';

const Commitment = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={marginBottom}>
      <div className='text-brandGray-300 w-[880px]'>
        <div className=' mb-6'>
          <Typography as='h2' font='font-gordita-bold'>
            Our Commitment
          </Typography>
        </div>
        <div className='mb-6 text-[18px] leading-[30px] font-gordita-regular'>
          Guiding the shift towards eco-friendly travel in Africa, our EV solutions support SDG13
          objectives, curbing carbon emissions, and fostering greener transportation.
        </div>
        <div className='mb-6 text-[18px] leading-[30px] font-gordita-regular'>
          Oxtra’s Green Plan is an initiative aimed at reducing the environmental impact of its
          operations and promoting sustainability. The main components of our Green Plan include
        </div>
      </div>
    </Container>
  );
};

export default Commitment;
