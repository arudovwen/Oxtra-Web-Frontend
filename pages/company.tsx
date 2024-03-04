import React from "react";
import CompanyHero from "@/components/data/company/CompanyHero";
import Offer from "@/components/data/company/Offer";
import TrustedPartners from "@/components/data/home/TrustedPartners";
import Team from "@/components/data/company/Team";
import PassiveIncome from "@/components/data/home/PassiveIncome";
import Experience from "@/components/data/home/Experience";
import Footer from "@/layout/NonAuthLayout/Footers";
import Image from "next/image";
import pink from "../public/assets/pink.png";
import blue from "../public/assets/blue.png";
import halfCar from "../public/assets/heroCar.png";
import backcar from "../public/assets/Rectangle 100.png";
import Container from "@/layout/NonAuthLayout/Container";
import MovingCar from "@/components/constants/MovingCar";

const Company = () => {
  const activePage = "Company";
  const margin = "mb-[200px]";

  return (
    <div className="overflow-hidden">
      <CompanyHero activePage={activePage} />
      <Offer />
      <TrustedPartners marginBottom={margin} />
      <Team marginBottom={margin} />

      <PassiveIncome marginBottom={margin} />
      <Experience marginBottom={margin} />
      <Footer />

      <Container>
        <div className="relative">
          <Image
            src={blue}
            width={1400}
            height={1400}
            alt="blue"
            className="bottom-[3216px]  absolute left-[-736px] opacity-70"
          />
          <Image
            src={backcar}
            width={750}
            height={750}
            alt="car"
            className="bottom-[3768px] hidden xl:block absolute left-[-670px]"
          />

          <Image
            src={blue}
            width={750}
            height={750}
            alt="blue"
            className="bottom-[2400px]
          absolute right-[-352px] opacity-70 hidden xl:block"
          />
          <Image
            src={pink}
            width={750}
            height={750}
            alt="pink"
            className="bottom-[1248px] hidden xl:block absolute right-[-304px] opacity-70"
          />

          <Image
            src={blue}
            width={750}
            height={750}
            alt="blue"
            className="bottom-[1602px] hidden xl:block absolute left-[-304px] opacity-70"
          />

          <Image
            src={halfCar}
            width={500}
            height={500}
            alt="pink"
            className="top-[-4355px] hidden xl:block absolute right-[-432px]"
          />
          <Image
            src={pink}
            width={750}
            height={750}
            alt="pink"
            className="top-[-4576px] absolute right-[-320px] opacity-70"
          />
        </div>
      </Container>
      <MovingCar />
    </div>
  );
};

export default Company;
