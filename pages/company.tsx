import React from "react";
import CompanyHero from "@/components/data/company/CompanyHero";
import Offer from "@/components/data/company/Offer";
import Team from "@/components/data/company/Team";
import PassiveIncome from "@/components/data/home/PassiveIncome";
import Experience from "@/components/data/home/Experience";
import Footer from "@/layout/NonAuthLayout/Footers";
import MovingCar from "@/components/constants/MovingCar";
import Commitment from "@/components/data/company/Commitment";

const Company = () => {
  const margin = "mb-[200px]";

  return (
    <div className="overflow-hidden">
      <div className="z-[2] relative">
      <CompanyHero />
      <Offer />
      <Commitment marginBottom={margin} />
      <Team marginBottom={margin} />
      <PassiveIncome />
      <Experience marginBottom="mb-[120px]" />
      <Footer />

      <MovingCar />
      </div>

      <div className="bg-[url('/oxtraleft.png')] w-[300px] h-[464px] absolute left-0 top-[5%] bg-contain bg-no-repeat z-[1]" />
      <div className="bg-[url('/oxtraright.png')] w-[500px] h-[640px] absolute right-0 top-0 bg-cover bg-no-repeat z-[1]" />

    </div>
  );
};

export default Company;
