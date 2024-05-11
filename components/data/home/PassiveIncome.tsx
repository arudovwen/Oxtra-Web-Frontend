import React from "react";
import Image from "next/image";
import passiveIncome from "../../../public/assets/passiveIncome.png";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../constants/Button";
import Container from "../../../layout/NonAuthLayout/Container";
import MovingCar from "@/components/constants/MovingCar";


const PassiveIncome = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={""} className="relative pb-[120px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        <Image
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-once="true"
          src={passiveIncome}
          width={500}
          height={400}
          alt="passive income"
          className="object-cover rounded-lg z-50"
        />
        <div className="text-left lg:w-[500px] z-10">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="mb-6 text-brandGray-300 text-xl md:text-3xl  font-gordita-bold "
          >
            Earn passive income with your vehicle
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="mb-6 text-brandGray-400 text-[16px] font-gordita-regular leading-[24px]"
          >
            You can make money on Oxtra by hosting your vehicle on our platform.
            We lease your vehicle out and share the payment.
          </div>

          <Button
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            bg="bg-brandGreen-300"
            hover="hover:bg-brandGray-200"
            textColor="text-white"
            width={false}
            size="text-sm"
          >
            <div className="flex items-center gap-4">
              <span>Host your vehicle for lease</span>{" "}
              <span>
                <BsArrowRight />
              </span>
            </div>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
      <MovingCar />
      </div>
    </Container>
  );
};

export default PassiveIncome;
