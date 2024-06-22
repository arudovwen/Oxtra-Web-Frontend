import React from "react";
import Typography from "../../constants/Typorgraphy";
import { FaCar } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import classNames from "classnames";
import Container from "../../../layout/NonAuthLayout/Container";
import Image from "next/image";
import flutterwave from "../../../public/assets/flutterwave.png";
import paystack from "../../../public/assets/paystack.png";
import versus from "../../../public/assets/versus.png";
import taxi from "../../../public/assets/ev-taxi.png";

const offerIconClasses = classNames("w-[36px] h-[36px]");

const offers = [
  {
    title: "Seamless Experience",
    description:
      "From making a request to returning the vehicle, we give you a smooth user experience",
    background: "bg-[#FDECEC]",
    iconColor: "text-[#D41616]",

    icon: <MdPhoneAndroid className={offerIconClasses} />,
  },
  {
    title: "Robust Fleet",
    description:
      "Wedding guest or business appointment, we have vehicles to that fit whatever your requirement may be",
    background: "bg-[#F1F8F3]",
    iconColor: "text-[#178254]",

    icon: <FaCar className={offerIconClasses} />,
  },
  {
    title: "Prompt Support",
    description:
      "We promise a seamless experience and our support team is there to ensure that is maintained end to end",
    background: "bg-[#FFFFEB]",
    iconColor: "text-[#FF8F1F]",

    icon: <IoPersonSharp className={offerIconClasses} />,
  },
];

const sponsors = [
  {
    name: "Flutterwave",
    image: flutterwave,
  },
  {
    name: "Paystack",
    image: paystack,
  },

  {
    name: "Venus",
    image: versus,
  },
  // {
  //   name: 'Taxi',
  //   image: taxi,
  // },
];

const Services = () => {
  return (
    <div className="relative">
      <Container marginBottom="mb-[120px]" className="relative">
        <div
          className="text-center text-brandGray-300 mb-12"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <Typography as="h3" font="font-gordita-bold">
            What Oxtra offers you
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
              </div>
            );
          })}
        </div>
        <div className="text-center mt-[80px]">
          <Typography as="p" font="font-gordita-medium">
            We rely on individuals, businesses and experts to help reshape the
            transport sector
          </Typography>

          {
            <div className="flex justify-center gap-6 mt-[40px]">
              {sponsors.map((sponsor) => {
                return (
                  <div key={sponsor.name} className="mx-4">
                    <Image src={sponsor.image} alt={sponsor.name} />
                  </div>
                );
              })}
            </div>
          }
        </div>
      </Container>
    </div>
  );
};

export default Services;
