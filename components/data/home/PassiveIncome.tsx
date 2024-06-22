import React from "react";
import Image from "next/image";
import passiveIncome from "../../../public/assets/passiveIncome.png";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../constants/Button";
import Container from "../../../layout/NonAuthLayout/Container";
import money from "../../../public/assets/money-hand.png";

const PassiveIncome = () => {
  return (
    <div className="bg-[#F8FCF9]">
      <Container marginBottom={""} className="relative py-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 relative">
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

          <Image
            src={money}
            width={274}
            height={274}
            alt="money hand"
            className="left-[-135px] absolute"
          />
          <div className="text-left lg:w-[560px] z-10">
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-once="true"
              className="mb-6 text-brandGray-300 text-xl md:text-3xl  font-gordita-bold "
            >
              Join the Partners Network today and unlock the power of passive
              income
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
                <span>Become a Partner Today</span>
                <span>
                  <BsArrowRight />
                </span>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PassiveIncome;
