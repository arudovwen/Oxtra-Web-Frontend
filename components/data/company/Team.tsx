import React from "react";
import Container from "../../../layout/NonAuthLayout/Container";
import Typography from "../../constants/Typorgraphy";
import Image from "next/image";
import person1 from "../../../public/assets/pic1.png";
import { GoArrowUpRight } from "react-icons/go";
import obinna from "../../../public/assets/founders/obinna.jpeg";
import samuel from "../../../public/assets/founders/samuel.png";
import success from "../../../public/assets/founders/success.jpeg";
import omotola from "../../../public/assets/founders/omotola.jpg";

const team = [
  {
    name: "Ndukwu Obinna",
    position: "Co-Founder & CEO",
    image: obinna,
    linkedin:
      "https://www.linkedin.com/in/ndukwu-chidiebere-obinna-813a27117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Umoru Samuel ",
    position: "Co-Founder - Product and R&D",
    image: samuel,
    linkedin: "LinkedIn.com/in/samuelumoru",
  },
  {
    name: "Omotola Dorcas",
    position: "Co-Founder and CMO",
    image: omotola,
    linkedin:
      "https://www.linkedin.com/in/omotoladorcas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Ahon Success",
    position: "Co-Founder and CTO",
    image: success,
    linkedin:
      "https://www.linkedin.com/in/success-ahon?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const Team = ({ marginBottom }: { marginBottom: string }) => {
  return (
   <div className="relative">
     <Container className="pb-[120px] z-[2] relative">
      <div className="text-brandGray-300">
        <div className=" mb-7 text-center">
          <Typography as="h2" font="font-gordita-ultra">
            Founding Team
          </Typography>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center gap-10 justify-center max-w-[1192px] mx-auto">
          {team.map((individual) => {
            return (
              <div className="max-w-[274px] w-full" key={individual.name}>
                <Image
                  src={individual.image}
                  alt={individual.name}
                  width={274}
                  height={240}
                  className="mb-6 w-[274px] h-[240px] object-cover  rounded-[16px]"
                />
                <div className="mb-3">
                  <Typography as="p" font="font-gordita-regular">
                    {individual.name}
                  </Typography>
                </div>
                <div className="mb-[12px]">
                  <Typography as="p" font="font-gordita-bold">
                    {individual.position}
                  </Typography>
                </div>
                <a
                  href={individual.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brandGreen-300 flex  items-center gap-[4px] "
                >
                  <div className="text-brandGreen-300 flex  items-center gap-[4px] ">
                    {" "}
                    <Typography as="p" font="font-gordita-bold">
                      Linkedin
                    </Typography>
                    <GoArrowUpRight className="font-semibold w-[20px] h-[20px]" />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
     <div className="bg-[url('/oxtraleft.png')] w-[300px] h-[464px] absolute left-0 top-[15%] bg-contain bg-no-repeat z-[1]" />
     <div className="bg-[url('/oxtraright.png')] w-[500px] h-[640px] absolute right-0 bottom-[5%] bg-cover bg-no-repeat z-[1]" />
   </div>
  );
};

export default Team;
