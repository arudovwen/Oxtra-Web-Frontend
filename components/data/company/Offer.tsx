import React from "react";
import Typography from "../../constants/Typorgraphy";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Container from "../../../layout/NonAuthLayout/Container";
import { offers } from "@/components/constants/arrays";

const Offer = () => {
  return (
    <Container>
      <div className="mt-[234px] text-center mb-[200px]">
        <div className="text-brandGray-300 mb-20 font-gordita-bold text-[56px] leading-[56px]">
          What we offer
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center ">
          {offers.map((offer) => {
            return (
              <div
                key={offer.title}
                className={`flex ${offer.height} z-50 w-full flex-col rounded-xl items-center p-6 border border-[#d4d6d8]`}
              >
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={400}
                  height={400}
                  className="rounded-xl"
                />

                <div className="my-6 text-brandGray-300">
                  <Typography as="h6" font="font-gordita-medium">
                    {offer.title}
                  </Typography>
                </div>
                <div className="mb-6 text-[14px] leading-[21px] font-gordita-regular text-brandGray-100">
                  {offer.description}
                </div>
                <div>
                  <Link
                    href={offer.link}
                    className="text-brandGreen-300 text-sm font-gordita-medium flex items-center gap-4"
                  >
                    <span>{offer.linkText}</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Offer;
