import React from "react";
import Container from "@/layout/NonAuthLayout/Container";
import Typography from "@/components/constants/Typorgraphy";

const commitments = [
  {
    content: [
      {
        title: "Zero Emissions by 2040",
        body: "We are committing to becoming a fully zero-emission platform by 2040. This includes transitioning to electric vehicles (EVs), investing in public transportation, and expanding micro-mobility options like bikes and scooters across Africa.",
        classes:""
      },
      {
        title: "Green Rides",
        body: 'Oxtra is working towards increasing the number of electric vehicles (EVs) in its fleet. The "Oxtra Green" option will allow riders to choose electric vehicles for their trips, supporting Oxtra’s efforts to reduce emissions and decrease the carbon footprint of its operations.',
        classes:""
      },

     
    ],
  },
  {
    content: [
      {
        title: "Investment in Charging Infrastructure",
        body: "Oxtra will be investing in the development of EV charging infrastructure to make it easier for drivers to charge their vehicles. This includes partnerships with charging network providers and investments in charging stations.",
        classes:"flex-1"
      },
      {
        title: "100% Electric Vehicles in Key Cities by 2040",
        body: "We aim to have 100% of rides in electric vehicles in major cities in Nigeria, Ghana, Kenya and SouthAfrica. ",
        classes:""
      },
     
    
    ],
  },
  {
    content: [
      {
        title: "Collaborations and Partnerships",
        body: "Oxtra will be collaborating  with various stakeholders, including governments, NGOs, and private companies, to advance its sustainability initiatives and to foster the broader adoption of clean energy.",
        classes:"flex-1"
      },
      {
        title: "Sustainability Reporting",
        body: "Oxtra will be providing regular reports on its progress towards sustainability goals, offering transparency and accountability. This includes tracking and reporting on the reduction of emissions and the growth of its electric fleet.",
        classes:""
      },
     
    ],
  },
  {
    content: [
      {
        title: "Sustainability Education",
        body: "Oxtra aims to raise awareness among its drivers and passengers about the importance of sustainability and eco-friendly practices..",
        classes:""
      },
    
      {
        title: "Incentives for Drivers and Riders",
        body: 'Oxtra will be offering incentives and discounts to drivers for switching to electric vehicles. This includes partnerships with automakers for discounted EV purchases, access to special EV rental programs, and additional earnings for each "Oxtra Green" trip.',
        classes:"flex-1"
      },
    ],
  },
];

const Commitment = ({ marginBottom }: { marginBottom: string }) => {
  return (
   <div className="relative" id="commitment">
     <Container className="z-[2] relative">
      <div className="text-brandGray-300 pt-[64px] md:pt-[160px] pb-[120px]">
        <div className="text-brandGreen-400 mb-4">
          <Typography as="h2" font="font-gordita-ultra">
            Our Commitment
          </Typography>
        </div>
        <div className="lg:w-[800px]">
          <div className="mb-3 text-[18px] leading-[30px] font-gordita-regular">
            Guiding the shift towards eco-friendly travel in Africa, our EV
            solutions support SDG13 objectives, curbing carbon emissions, and
            fostering greener transportation.
          </div>
          <div className="mb-[56px] text-[18px] leading-[30px] font-gordita-regular">
            Oxtra’s Green Plan is an initiative aimed at reducing the
            environmental impact of its operations and promoting sustainability.
            The main components of our Green Plan include
          </div>
        </div>

        <div>
          <ul className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-8">
            {commitments.map((i, id) => (
              <li key={id}>
                <ul role="list" className="flex flex-col gap-y-8 h-full">
                  {i.content.map((commit, i) => (
                    <li
                      key={commit.title}
                      className={`rounded-lg border border-[#E4E6E8] hover:bg-brandGreen-400 bg-white group ${commit?.classes}`}
                    >
                      <div className="flex flex-1 flex-col p-[16px] py-6">
                        <div
                          className={`mb-3 text-base leading-[21px] font-bold group-hover:text-white text-brandGreen-400`}
                        >
                          {commit.title}
                        </div>
                        <div
                          className={`mt-1 leading-[18px] flex flex-grow flex-col text-xs justify-between  group-hover:text-white text-brandGreen-400`}
                        >
                          {commit.body}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-[56px] text-[18px] leading-[30px] font-gordita-regular">
          Through these efforts, Oxtra aims to significantly reduce its carbon
          footprint, support the transition to electric vehicles, and promote
          sustainable transportation solutions. Additionally, Oxtra seeks to
          make urban transportation more sustainable and reduce its overall
          environmental impact.
        </div>
      </div>
    </Container>
      <div className="bg-[url('/oxtraleft.png')] w-[300px] h-[464px] absolute left-0 bottom-[5%] bg-contain bg-no-repeat z-[1]" />
      <div className="bg-[url('/oxtraright.png')] w-[500px] h-[640px] absolute right-0 top-[10%] bg-cover bg-no-repeat z-[1]" />

   </div>
  );
};

export default Commitment;
