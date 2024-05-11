import React from "react";
import { carAccessories, cars } from "@/components/constants/arrays";
import { HiArrowLongRight } from "react-icons/hi2";
import { useRouter } from "next/router";

const CarList = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-[24px]">
      {cars.map((item: any, index) => (
        <div
          className="border overflow-x-hidden rounded-[6px] py-[24px] px-[16px] pare"
          key={index}
        >
          <div className="font-gordita-bold text-[20px] text-[#242424]">
            {item}
          </div>
          <div className="mt-[12px] text-[10px] text-[#646464]">
            or any similar SUV
          </div>

          <div>
            <img src="../assets/car.jpg" className="my-[16px] w-full car" />
          </div>

          <div className="flex items-center  justify-between">
            {carAccessories.map((item: any, i: any) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center"
              >
                <img
                  className="h-[13px] object-contain w-[13px]"
                  src={item.img}
                />
                <div className="mt-[8px] text-[12px] text-[#646464] font-gordita-medium">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[24px] flex justify-between items-center">
            <div className="text-[#242424] w-full">
              <div className="font-gordita-bold text-[20px]">₦15,000 / day</div>
              <div className="mt-[16px] font-gordita-medium text-[14px]">
                ₦45,000 Total
              </div>
            </div>

            <div className="par">
              <div
                onClick={() => router.push(`/rent-a-car/${item}/booking`)}
                className="cursor-pointer bg-[#214528] text-white flex justify-center items-center rounded-full h-[40px] w-[40px]"
              >
                <HiArrowLongRight className="arrow" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
