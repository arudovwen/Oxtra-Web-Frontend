import React from 'react';
import Container from '../../../layout/NonAuthLayout/Container';
import Typography from '../../constants/Typorgraphy';
import Image from 'next/image';
import person1 from '../../../public/assets/pic1.png';
import { GoArrowUpRight } from 'react-icons/go';
import obinna from '../../../public/assets/founders/obinna.jpeg';
import samuel from '../../../public/assets/founders/samuel.png';
import success from '../../../public/assets/founders/success.jpeg';
import omotola from '../../../public/assets/founders/omotola.jpg';

const team = [
  {
    name: 'Obinna Chidiebere',
    position: 'Co-founder & CEO',
    image: obinna,
    linkedin:
      'https://www.linkedin.com/in/ndukwu-chidiebere-obinna-813a27117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Samuel Umoru',
    position: 'Co-Founder - Product and R&D',
    image: samuel,
    linkedin: 'LinkedIn.com/in/samuelumoru',
  },
  {
    name: 'Omotola Dorcas',
    position: 'Co-Founder and CMO',
    image: omotola,
    linkedin:
      'https://www.linkedin.com/in/omotoladorcas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Success Ahon',
    position: 'Co-founder and CTO',
    image: success,
    linkedin:
      'https://www.linkedin.com/in/success-ahon?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

const Team = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={marginBottom}>
      <div className='text-brandGray-300'>
        <div className=' mb-6 text-center'>
          <Typography as='h2' font='font-gordita-ultra'>
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
                  className='mb-4 w-[274px] h-[240px] object-cover  rounded-[16px]'
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
                  href={individual.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-brandGreen-300 flex  items-center gap-[4px] '
                >
                  <div className='text-brandGreen-300 flex  items-center gap-[4px] '>
                    {' '}
                    <Typography as='p' font='font-gordita-bold'>
                      Linkedin
                    </Typography>
                    <GoArrowUpRight className='font-semibold w-[20px] h-[20px]' />
                  </div>
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
