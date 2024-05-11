import React from "react";
import Typography from "../../constants/Typorgraphy";
import { ImIcoMoon } from "react-icons/im";
import car from "../../../public/assets/Frame.png";
import Image from "next/image";
import FindCarForm from "../../constants/forms/FindCarForm";

const FindPreferredCar = () => {

  return (
    <div className="flex justify-center">
      <div className="bg-white absolute box-shadow w-[90%]  xl:w-[1164px] top-[523px] lg:top-[550px]  p-6">
        <div>
          <div className="text-brandGray-300 mb-[26px]">
            <Typography as="h5" font="font-gordita-medium" className="text-brandGreen-300">
              Find your preferred car now
            </Typography>
          </div>
          {/* <div className="flex gap-[26px] mb-[26px]">
            <div className="text-brandGreen-300 flex items-center gap-2.5">
              <ImIcoMoon />
              <Typography as="p" font="font-gordita-medium">
                Daily trip
              </Typography>
            </div>
            <div className="text-brandGray-100 flex items-center gap-2.5">
              <ImIcoMoon />
              <Typography as="p" font="font-gordita-regular">
                Hourly trip
              </Typography>
            </div>
          </div> */}
        </div>
        <FindCarForm />
      </div>
    </div>
  );
};

export default FindPreferredCar;
