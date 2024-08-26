import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { PiArrowFatRightFill } from "react-icons/pi";
import Container from "@/layout/NonAuthLayout/Container";
import Typography from "@/components/constants/Typorgraphy";

const commitments = [
  {
    content: [
      {
        title: "Zero Emissions by 2040",
        body: "We are committed to becoming a fully zero-emission platform by 2040. This includes transitioning our fleet to electric vehicles (EVs), expanding micro-mobility options like bikes and scooters, and investing in sustainable public transportation solutions across Africa. Additionally, our focus on CNG as a cleaner alternative to petrol is a critical step towards reducing emissions and promoting sustainable energy use.",
        classes: "",
      },
      {
        title: "Green Rides",
        body: `Oxtra is working diligently to increase the number of CNG and electric vehicles in our fleet. Our "Oxtra Green" option allows riders to choose eco-friendly vehicles, supporting our efforts to reduce emissions and decrease the carbon footprint of our operations. Whether it's through CNG or EVs, we're making it easier for our customers to choose sustainability`,
        classes: "",
      },
    ],
  },
  {
    content: [
      {
        title: "Investment in Charging Infrastructure",
        body: "To support our transition, Oxtra will be investing in the development of EV charging stations and CNG refueling infrastructure. By partnering with network providers and investing in these critical services, we aim to make it easier for drivers to power their vehicles, ensuring seamless operations as we move towards a greener future.",
        classes: "flex-1",
      },
      {
        title: "100% Electric Vehicles in Key Cities by 2040",
        body: "Our goal is to have 100% of rides in key African cities, including Lagos, Accra, Nairobi, and Johannesburg, powered by electric and CNG vehicles by 2040. This ambitious target underscores our commitment to leading the transformation of urban transportation in Africa.",
        classes: "",
      },
    ],
  },
  {
    content: [
      {
        title: "Collaborations and Partnerships",
        body: "Oxtra is collaborating with governments, NGOs, and private companies to advance our sustainability initiatives and foster the broader adoption of clean energy. Our partnerships will also help accelerate the adoption of CNG and EV technologies, ensuring a smoother transition to sustainable transport solutions.",
        classes: "flex-1",
      },
      {
        title: "Sustainability Reporting",
        body: "Transparency is key to our progress. Oxtra will provide regular updates on our sustainability efforts, including tracking our emission reductions, the expansion of our CNG and electric vehicle fleet, and our infrastructure developments. Our commitment to sustainability is not just a promise but a measurable goal we aim to achieve.",
        classes: "",
      },
    ],
  },
  {
    content: [
      {
        title: "Sustainability Education",
        body: "We believe in the power of education. Oxtra aims to raise awareness among our drivers, passengers, and partners about the importance of sustainability and eco-friendly practices. By encouraging the adoption of CNG and EVs, we are helping to build a more informed and environmentally-conscious community.",
        classes: "",
      },

      {
        title: "Incentives for Drivers and Riders",
        body: 'To encourage the switch to CNG and electric vehicles, Oxtra will offer incentives and discounts to drivers. This includes partnerships with automakers for discounted EV and CNG vehicle purchases, access to special rental programs, and additional earnings for each "Oxtra Green" trip. Our riders will also benefit from choosing green options, supporting a collective move towards a sustainable future.',
        classes: "flex-1",
      },
    ],
  },
];

const Commitment = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <div className="relative" id="commitment">
      <Container className="z-[2] relative">
        <div className="text-brandGray-300 pt-[64px] md:pt-[160px] pb-[120px]">
          <div className="text-brandGreen-400 mb-6">
            <Typography as="h2" font="font-gordita-ultra">
              Our Commitment to Sustainable Transportation
            </Typography>
          </div>
          <div className="">
            <div className="mb-10 text-lg leading-normal font-gordita-regular">
              At Oxtra, we are dedicated to guiding the shift towards
              eco-friendly travel in Africa. Our initiatives in Compressed
              Natural Gas (CNG) and Electric Vehicles (EVs) align with the
              Sustainable Development Goals (SDG13), specifically targeting the
              reduction of carbon emissions and fostering greener transportation
              across the continent.
            </div>
          </div>

          <div>
            <div className="flex gap-x-3 items-center mb-6 font-semibold text-xl text-brandGreen-400">
              {" "}
              <h3 className="font-semibold text-xl">
                Oxtra’s Green Plan: Driving Sustainability
              </h3>{" "}
              <span className="text-xl hidden lg:inline">
                <PiArrowFatRightFill />
              </span>
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-6">
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
          <div className="mt-[56px] text-lg leading-normal">
            Through these comprehensive efforts, Oxtra aims to significantly
            reduce its carbon footprint, support the transition to CNG and
            electric vehicles, and promote sustainable transportation solutions
            across Africa. We are committed to making urban transportation more
            sustainable, reducing our overall environmental impact, and driving
            the change towards a greener, cleaner future.
          </div>
        </div>
      </Container>
      <div className="bg-[url('/oxtraleft.png')] w-[300px] h-[464px] absolute left-0 bottom-[5%] bg-contain bg-no-repeat z-[1]" />
      <div className="bg-[url('/oxtraright.png')] w-[500px] h-[640px] absolute right-0 top-[10%] bg-cover bg-no-repeat z-[1]" />
    </div>
  );
};

export default Commitment;
