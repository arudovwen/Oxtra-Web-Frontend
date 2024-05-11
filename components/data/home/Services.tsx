import React from "react";
import Typography from "../../constants/Typorgraphy";
import { FaCar, FaTruckLoading, FaPlaneDeparture } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import classNames from "classnames";
import Container from "../../../layout/NonAuthLayout/Container";
import Link from "next/link";
import car from "../../../public/assets/Frame.png";
import Image from "next/image";

const offerIconClasses = classNames("w-[36px] h-[36px]");

const offers = [
  {
    title: "Cars",
    description: "We have different kinds of cars for whatever journey need",
    background: "bg-[#FDECEC]",
    iconColor: "text-[#D41616]",
    linkText: "Check out our cars",
    icon: <FaCar className={offerIconClasses} />,
    link: "/",
  },
  {
    title: "Courier",
    description: "We have vehicles to help you deliver however big or small",
    background: "bg-[#F1F8F3]",
    iconColor: "text-[#178254]",
    linkText: "Get a quote",
    icon: <FaTruckLoading className={offerIconClasses} />,
    link: "/",
  },
  {
    title: "Airport Trips",
    description: "Whether it is pick up or drop-off, we’ve got you covered",
    background: "bg-[#FFFFEB]",
    iconColor: "text-[#FF8F1F]",
    linkText: "Book a trip now",
    icon: <FaPlaneDeparture className={offerIconClasses} />,
    link: "/",
  },
];

const Services = () => {
  return (
    <div className="relative">
      <Image
        data-aos="slide-right"
        src={car}
        width={140}
        height={100}
        alt="car"
        className="top-20 hidden xl:block absolute left-20 h-auto"
      />
      <Container marginBottom="mb-[120px]" className="relative pt-[350px] md:pt-[200px]">
        <div
          className="text-center text-brandGray-300 mb-12"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <Typography as="h3" font="font-gordita-bold">
            Our services
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:w-[1024px] mx-auto">
          {offers.map((offer) => {
            return (
              <div
                key={offer.title}
                className={`flex flex-col cursor-pointer rounded items-center pt-[33px] z-0 px-[25px] pb-[25px] ${offer.background} hover:shadow-lg`}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <span className={`mb-[26px] ${offer.iconColor}`}>
                  {offer.icon}
                </span>
                <div className="mb-4">
                  <Typography
                    as="h6"
                    font="font-gordita-medium"
                    className="font-bold"
                  >
                    {offer.title}
                  </Typography>
                </div>
                <div className="mb-[21px] text-center font-gordita-regular text-[14px] text-brandGray-300 leading-[21px]">
                  {offer.description}
                </div>
                <span>
                  <Link
                    href={offer.link}
                    className="text-brandGreen-300 text-sm font-gordita-medium flex items-center gap-4"
                  >
                    {offer.linkText}

                    <BsArrowRight />
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Services;
