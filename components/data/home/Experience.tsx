import React from "react";
import Container from "../../../layout/NonAuthLayout/Container";
import Image from "next/image";
import experience from "../../../public/assets/experience.png";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../constants/Button";
import car from "../../../public/assets/experienceCar.png";

const Experience = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={marginBottom}>
      <div className="bg-brand-amber py-[80px] w-full relative  rounded-lg flex gap-[138.28px] justify-center">
        <Image
          src={experience}
          alt="come and experience"
          className="object-cover rounded-3xl -z-30 xl:z-0"
          fill
        />

        <div className="text-center w-[749px] -z-30 xl:z-30">
          <div className="mb-6 text-white text-[40px] leading-[51.2px] font-gordita-bold ">
            Come and experience ease and class when you ride with Oxtra.
          </div>
          <div className="mb-10 text-white text-[16px] font-gordita-regular leading-[24px]">
            We take pride in the extra mile we go through <br /> to ensure that
            you have a delightful experience when you ride with us
          </div>
          <Button
            bg="bg-brandGray-200"
            hover="hover:bg-brandGreen-300"
            textColor="text-[#444648]"
            width={false}
            size="text-sm"
          >
            <div className="flex items-center gap-4">
              <span>Find a vehicle</span>{" "}
              <span>
                <BsArrowRight />
              </span>
            </div>
          </Button>
        </div>

        <Image
          src={car}
          alt="come and experience"
          className="object-cover hidden lg:block absolute -z-30 xl:z-10 bottom-0 right-0"
          width={400}
          height={400}
        />
      </div>
    </Container>
  );
};

export default Experience;
