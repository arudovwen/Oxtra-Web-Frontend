import React from 'react';
import Container from '../../../layout/NonAuthLayout/Container';
import Typography from '../../constants/Typorgraphy';
import Image from 'next/image';
import person1 from '../../../public/assets/pic1.png';
import person2 from '../../../public/assets/pic2.png';
import person4 from '../../../public/assets/pic4.png';
import person3 from '../../../public/assets/pic3.png';

const team = [
  {
    name: 'Obinna Chidiebere',
    position: 'Co-founder & CEO',
    image: person1,
    linkedin: '',
  },
  {
    name: 'Samuel Umoru',
    position: 'Co-Founder - Product and R&D',
    image: person4,
    linkedin: '',
  },
  { name: 'Omotola Dorcas', position: 'Co-Founder and CMO', image: person3 },
  {
    name: 'Ahon Success',
    position: 'Co-founder and CTO',
    image: person2,
    linkedin: '',
  },
];

const Team = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={marginBottom}>
      <div className='text-brandGray-300'>
        <div className=' mb-6 text-center'>
          <Typography as='h2' font='font-gordita-bold'>
            Founding Team
          </Typography>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-[72px] justify-center'>
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
                  <Typography as='p' font='font-gordita-regular'>
                    {individual.name}
                  </Typography>
                </div>
                <div className='mb-[12px]'>
                  <Typography as='p' font='font-gordita-bold'>
                    {individual.position}
                  </Typography>
                </div>
                <a
                  href='http://'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-brandGreen-300 '
                >
                  <Typography as='p' font='font-gordita-bold'>
                    Linkedin
                  </Typography>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Team;
