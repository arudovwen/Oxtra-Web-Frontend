import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Container from "../../../layout/NonAuthLayout/Container";
import Button from "../../constants/Button";
import { placeholders, vehicles } from "@/components/constants/arrays";

const Vehicles = () => {
  const [activeVehicle, setActiveVehicle] = useState("Sedan");
  return (
    <div className="bg-[#F1F8F3] pt-10 lg:pt-12 pb-6 mb-[120px]">
      <Container>
        <div className=" text-brandGray-300 text-center ">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className=" mb-4 lg:w-[643px] mx-auto text-xl md:text-[40px] md:leading-[54.4px] font-gordita-bold "
          >
            Our vehicles are ready to take you around town
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className=" lg:w-[683px] font-gordita-regular mx-auto mb-10 text-[16px] leading-[24px]"
          >
            We give our riders the best driving experience from our world-class
            drivers to the quality checks we put our cars through
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="flex overflow-scroll md:overflow-auto min-[570px]:justify-center gap-6 mb-14"
          >
            {vehicles.map((vehicle) => {
              return (
                <button
                  key={vehicle.name}
                  onClick={() => setActiveVehicle(vehicle.name)}
                  className={`${
                    activeVehicle === vehicle.name
                      ? "bg-brandGreen-300 text-white"
                      : "bg-brandGray-200 text-brandGray-300"
                  } rounded-[60px] px-6 text-sm py-3 cursor-pointer font-gordita-medium z-30`}
                >
                  {vehicle.name}
                </button>
              );
            })}
          </div>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-10 mb-14">
              {placeholders.map((v, index) => {
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
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
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-once="true"
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
      </Container>{" "}
    </div>
  );
};

export default Vehicles;
