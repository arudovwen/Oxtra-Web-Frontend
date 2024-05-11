import { useRouter } from "next/router";
import React from "react";

const Breakdown = ({
  setDriverType,
  driverType,
  dataClasses,
  parClasses,
}: any) => {
  const router = useRouter();
  return (
    <div className="w-full md:w-[48%] md:h-[37.5rem] flex flex-col">
      <div className="border border-[#E4E4E4] rounded-[12px] p-[24px]">
        <div className="font-gordita-bold text-[#242424]">Driver</div>

        <div className="mt-[16px] flex items-start md:items-center md:flex-row flex-col gap-[24px]">
          {["I'll drive by myself", "I need a driver"].map(
            (item: any, i: any) => (
              <div
                className="flex items-center gap-[8px] cursor-pointer"
                key={i}
                onClick={() => setDriverType(item)}
              >
                <img
                  className="w-[16px] h-[16px] object-contain mb-[4px]"
                  src={
                    i === 0
                      ? driverType === "I'll drive by myself"
                        ? "../../assets/yingyang-green.jpg"
                        : "../../assets/yingyang.jpg"
                      : driverType === "I need a driver"
                        ? "../../assets/yingyang-green.jpg"
                        : "../../assets/yingyang.jpg"
                  }
                />
                <div
                  className={`${
                    i === 0
                      ? driverType === "I'll drive by myself"
                        ? "font-gordita-medium"
                        : "font-gordita-regular"
                      : driverType === "I need a driver"
                        ? "font-gordita-medium"
                        : "font-gordita-regular"
                  } font-gordita-medium`}
                >
                  {item}
                </div>
              </div>
            )
          )}
        </div>

        <div
          className={`${
            driverType.includes("driver") ? "block" : "hidden"
          } mt-[18px]`}
        >
          <div className="text-#444648] text-[12px] font-gordita-bold">
            Add note to driver
          </div>

          <div>
            <input
              className="h-[75px] mt-[12px] w-full border border-[#C4C6C8] rounded-[8px] p-[16px] text-[#646668] text-[14px]"
              placeholder="Enter any special requests for the order"
            />
          </div>
        </div>
      </div>

      <div className="mt-[20px] border border-[#E4E4E4] rounded-[12px] p-[24px]">
        <div className="font-gordita-bold text-[#242424]">Price Breakdown</div>

        <div
          className={`flex flex-col ${
            driverType.includes("driver")
              ? "gap-[24px] md:gap-[18px] mt-[24px] md:mt-[18px]"
              : "mt-[24px] gap-[24px]"
          }`}
        >
          <div className={parClasses}>
            <div className="text-[#646464]">Vehicle price per day</div>
            <div className={dataClasses}>₦12,000</div>
          </div>

          <div className={parClasses}>
            <div className="text-[#646464]">No. of days</div>
            <div className={dataClasses}>3</div>
          </div>

          <div className={parClasses}>
            <div className="text-[#646464]">Driver Service</div>
            <div className={dataClasses}>
              {driverType.includes("driver") ? "₦5,000" : "No"}
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#E4E4E4]"></div>

          <div className={parClasses}>
            <div className="text-[#646464]">Total</div>
            <div className={dataClasses}> ₦41,000</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          localStorage.setItem("checkout", "checkout");
          router.push("/signup");
        }}
        className="hover:opacity-[0.8] mt-[22px] md:mt-auto mt-[22px] text-white w-full h-[48px] bg-[#42864F] rounded-[8px]"
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default Breakdown;
