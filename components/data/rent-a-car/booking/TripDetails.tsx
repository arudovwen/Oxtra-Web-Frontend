import { carFeatures } from "@/components/constants/arrays";
import React from "react";
import { FaRegCircle } from "react-icons/fa";

const TripDetails = ({ setAvailability, setStep, dataClasses }: any) => {
  return (
    <div className="w-full md:w-[496px]">
      <div className="border border-[#E4E4E4] rounded-[12px] p-[24px]">
        <div className={dataClasses}>Pick up and Return</div>

        <div className="mt-[16px] flex items-start gap-[16px]">
          <div className="relative">
            <FaRegCircle color="#42864F" size="16px" />
            <div className="flex justify-center items-center">
              <div className="w-[1px] h-[80px] my-[12px] bg-[#C4C4C4]"></div>
            </div>
            <FaRegCircle color="#42864F" size="16px" />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="text-[#444444] font-gordita-medium text-[14px]">
              Pick-up
            </div>
            <div className="text-[#646668]">3 Folake Kamoru Street, Lekki</div>
            <div className="text-[#444648] font-gordita-medium text-[12px]">
              Sat, 17 Feb · 10:00
            </div>
            <div className="mt-[8px] flex items-start gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <div className="text-[#444444] font-gordita-medium text-[14px]">
                  Return
                </div>
                <div className="text-[#646668]">MM1 Airport</div>
                <div className="text-[#444648] font-gordita-medium text-[12px]">
                  Tue, 20 Feb · 10:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setStep(2);
            setAvailability(false);
          }}
          className="cursor-pointer flex justify-end text-[#214528] mt-[16px] font-gordita-medium text-[12px]"
        >
          Change?
        </div>
      </div>

      <div className="mt-[20px] flex items-center gap-[16px] border border-[#E4E4E4] rounded-[12px] p-[15px] md:p-[24px] md:pb-0 md:pr-0">
        <div>
          <div className="font-gordita-bold text-[#242424]">Vehicle</div>

          <div className="mt-[12px]">
            <img
              src="/assets/car.jpg"
              className="w-[226px] h-[180px] object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-2">
          {carFeatures.map((item: any, i: any) => (
            <div key={i} className={`gap-[8px] mb-[15px] flex items-center`}>
              <img
                className="h-[13px] w-[13px] object-contain"
                src={item.img}
              />
              <div className="text-[12px] text-[#646464] font-gordita-medium">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
