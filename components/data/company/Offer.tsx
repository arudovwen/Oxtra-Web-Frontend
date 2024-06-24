import React from "react";
import Typography from "../../constants/Typorgraphy";
import Image from "next/image";
import Container from "../../../layout/NonAuthLayout/Container";
import { offers } from "@/components/constants/arrays";

const Offer = () => {
  return (
    <div className="bg-[#F8FCF9] py-[120px] mt-[200px]">
      <Container>
        <div className="">
          <div className="text-brandGray-300 text-center mb-[48px] font-gordita-ultra text-[32px] md:text-[56px] leading-[56px]">
            What we stand for
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 items-center ">
            {offers.map((offer) => {
              return (
                <div
                  key={offer.title}
                  className="z-50 w-full  rounded-[6px] p-6  bg-[#E4F2E6] h-full"
                >
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={48}
                    height={48}
                    className="rounded-xl mb-6"
                  />

                  <div className="mb-2 text-brandGray-300">
                    <h6 className="font-bold">
                      {offer.title}
                    </h6>
                  </div>

                  <p className=" text-[16px] leading-[24px] font-gordita-regular">
                    {offer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
