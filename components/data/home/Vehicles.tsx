import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Container from "../../../layout/NonAuthLayout/Container";
import Button from "../../constants/Button";
import { placeholders, vehicles } from "@/components/constants/arrays";

const Vehicles = () => {
  const [activeVehicle, setActiveVehicle] = useState("Sedan");
  return (
    <div className=" text-brandGray-300 text-center mb-[120px]">
      <div className=" mb-12 lg:w-[643px] mx-auto text-[40px] leading-[54.4px] font-gordita-bold ">
        Our vehicles are <br />
        ready to take you around town
      </div>
      <p className=" lg:w-[643px] font-gordita-regular mx-auto mb-8 text-[16px] leading-[24px]">
        We give our riders the best driving experience from our world-class
        drivers to the quality checks we put our cars through
      </p>
      <div className="flex overflow-scroll md:overflow-auto min-[570px]:justify-center gap-6 mb-14">
        {vehicles.map((vehicle) => {
          return (
            <div
              key={vehicle.name}
              className={`${
                activeVehicle === vehicle.name
                  ? "bg-brandGreen-300 text-white"
                  : "bg-brandGray-200 text-brandGray-300"
              } rounded-[60px] px-6 text-sm py-3 cursor-pointer font-gordita-medium z-30`}
            >
              {vehicle.name}
            </div>
          );
        })}
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-10 mb-14">
          {placeholders.map((v, index) => {
            return (
              <div key={index}>
                <Image
                  src={v.car}
                  alt="car"
                  height={200}
                  width={600}
                  className="z-50"
                />
              </div>
            );
          })}
        </div>

        <Button
          bg="bg-brandGray-200"
          hover="hover:bg-brandGreen-300"
          width={false}
          textColor="text-[#444648]"
          size="text-sm"
        >
          <div className="flex items-center gap-4">
            <span className="">Show all vehicles</span>

            <span>
              <BsArrowRight />
            </span>
          </div>
        </Button>
      </Container>
    </div>
  );
};

export default Vehicles;
