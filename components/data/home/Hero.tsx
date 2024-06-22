import React from "react";
import Image from "next/image";
import Container from "@/layout/NonAuthLayout/Container";
import Typography from "@/components/constants/Typorgraphy";
import heroCar from "../../../public/assets/heroCar.png";
import heroCarHalf from "../../../public/assets/heroCarHalf.png";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-custom-gradient">
      <Container>
        <div className="text-white text-center xl:text-left pb-[204px] mt-[110px]">
          <div className="xl:max-w-[608px] mb-6">
            <Typography as="h2" font="font-gordita-medium">
              Search, and book a vehicle for rent easily
            </Typography>
          </div>
          <div className="xl:max-w-[648px] md:text-[20px] leading-[30px] font-gordita-light">
            Experience effortless vehicle rental! Find and book your perfect
            ride with ease. Our flexible options ensure you get the ideal
            vehicle for any journey. Explore our wide range of vehicles today!
          </div>
        </div>
      </Container>

      <Image
        src={heroCar}
        alt="backgorund image"
        className="object-cover absolute top-[5rem] hidden 2xl:block right-0 min-[1700px]:right-[80px] min-[1900px]:right-[192px] min-[2200px]:right-[320px]  min-[2800px]:right-[35rem] min-[3000px]:right-[46rem] min-[3500px]:right-[58rem] min-[4300px]:right-[88rem]"
        width={680}
        height={480}
        data-aos="slide-left"
        data-aos-duration="700"
        data-aos-once="true"
      />
      <Image
        src={heroCarHalf}
        alt="backgorund image"
        className="object-cover hidden xl:block absolute top-[14px] 2xl:hidden right-0"
        width={580}
        height={380}
        data-aos="slide-left"
        data-aos-duration="700"
        data-aos-once="true"
      />
    </div>
  );
};

export default Hero;
