import React from 'react';
import Container from '@/layout/NonAuthLayout/Container';
import Typography from '@/components/constants/Typorgraphy';

const commitments = [
  {
    title: 'Zero Emissions by 2040',
    body: 'We are committing to becoming a fully zero-emission platform by 2040. This includes transitioning to electric vehicles (EVs), investing in public transportation, and expanding micro-mobility options like bikes and scooters across Africa.',
  },
  {
    title: 'Investment in Charging Infrastructure',
    body: 'Oxtra will be investing in the development of EV charging infrastructure to make it easier for drivers to charge their vehicles. This includes partnerships with charging network providers and investments in charging stations.',
  },
  {
    title: 'Collaborations and Partnerships',
    body: 'Oxtra will be collaborating  with various stakeholders, including governments, NGOs, and private companies, to advance its sustainability initiatives and to foster the broader adoption of clean energy.',
  },
  {
    title: 'Sustainability Education',
    body: 'Oxtra aims to raise awareness among its drivers and passengers about the importance of sustainability and eco-friendly practices..',
  },
  {
    title: 'Green Rides',
    body: 'Oxtra is working towards increasing the number of electric vehicles (EVs) in its fleet. The "Oxtra Green" option will allow riders to choose electric vehicles for their trips, supporting Oxtra’s efforts to reduce emissions and decrease the carbon footprint of its operations.',
  },

  {
    title: '100% Electric Vehicles in Key Cities by 2040',
    body: 'We aim to have 100% of rides in electric vehicles in major cities in Nigeria, Ghana, Kenya and SouthAfrica. ',
  },

  {
    title: 'Sustainability Reporting',
    body: 'Oxtra will be providing regular reports on its progress towards sustainability goals, offering transparency and accountability. This includes tracking and reporting on the reduction of emissions and the growth of its electric fleet.',
  },
  {
    title: 'Incentives for Drivers and Riders',
    body: 'Oxtra will be offering incentives and discounts to drivers for switching to electric vehicles. This includes partnerships with automakers for discounted EV purchases, access to special EV rental programs, and additional earnings for each "Oxtra Green" trip.',
  },
];

const Commitment = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={marginBottom}>
      <div className='text-brandGray-300 pt-[64px] md:pt-[160px]'>
        <div className='text-brandGreen-400 mb-6'>
          <Typography as='h2' font='font-gordita-ultra'>
            Our Commitment
          </Typography>
        </div>
        <div className='lg:w-[800px]'>
          <div className='mb-6 text-[18px] leading-[30px] font-gordita-regular'>
            Guiding the shift towards eco-friendly travel in Africa, our EV solutions support SDG13
            objectives, curbing carbon emissions, and fostering greener transportation.
          </div>
          <div className='mb-[56px] text-[18px] leading-[30px] font-gordita-regular'>
            Oxtra’s Green Plan is an initiative aimed at reducing the environmental impact of its
            operations and promoting sustainability. The main components of our Green Plan include
          </div>
        </div>

        <div>
          <ul
            role='list'
            className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          >
            {commitments.map((commit, i) => (
              <li
                key={commit.title}
                className='col-span-1 flex flex-col divide-gray-200 rounded-lg shadow hover:bg-brandGreen-400 text-brandGreen-400 hover:text-white'
              >
                <div className='flex flex-1 flex-col p-[20px]'>
                  <div className='mb-[16px] text-base leading-[21px] font-bold '>
                    {commit.title}
                  </div>
                  <div className='mt-1 leading-[18px] flex flex-grow flex-col text-xs justify-between'>
                    {commit.body}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-[56px] text-[18px] leading-[30px] font-gordita-regular'>
          Through these efforts, Oxtra aims to significantly reduce its carbon footprint, support
          the transition to electric vehicles, and promote sustainable transportation solutions.
          Additionally, Oxtra seeks to make urban transportation more sustainable and reduce its
          overall environmental impact.
        </div>
      </div>
    </Container>
  );
};

export default Commitment;
