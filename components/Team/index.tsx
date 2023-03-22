import React from 'react';
import Container from '../Container';
import Typography from '../Typography';
import Image from 'next/image';
import person1 from '../../public/assets/pic1.png';
import person2 from '../../public/assets/pic2.png';
import person4 from '../../public/assets/pic4.png';
import person3 from '../../public/assets/pic3.png';

const team = [
  {
    name: 'Obinna Chidiebere',
    position: 'Founder & CEO',
    image: person1,
  },
  {
    name: 'Ahon Success',
    position: 'Chief Technology Officer',
    image: person2,
  },
  { name: 'Obinna Chidiebere', position: 'Product Designer', image: person3 },
  {
    name: 'Ahon Success',
    position: 'Chief Operations Officer',
    image: person4,
  },
];

const Team = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={marginBottom}>
      <div className='text-brandGray-300'>
        <div className=' mb-6 text-center'>
          <Typography as='h2' font='font-gordita-bold'>
            Our core team
          </Typography>
        </div>
        <div className=' mb-[46px] text-center'>
          <Typography as='xsmall' font='font-gordita-regular'>
            Meet the guys working tirelessly to make Oxtra help you
          </Typography>
        </div>
        <div className='flex items-center gap-[72px] justify-center'>
          {team.map((individual) => {
            return (
              <div key={individual.name}>
                <Image
                  src={individual.image}
                  alt={individual.name}
                  width={274}
                  height={240}
                  className='mb-4'
                />
                <div className='mb-3'>
                  <Typography as='xsmall' font='font-gordita-regular'>
                    {individual.name}
                  </Typography>
                </div>
                <div className=''>
                  <Typography as='xsmall' font='font-gordita-bold'>
                    {individual.position}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Team;
