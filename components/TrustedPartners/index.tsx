import React from "react";
import Container from "../Container";
import Typography from "../Typography";
import veriftyme from "../../public/assets/verifyme.png";
import wooven from "../../public/assets/wooven.png";
import paystack from "../../public/assets/paystack.png";
import nimc from "../../public/assets/nimc.png";
import Image from "next/image";

const trustedPartners = [
  {
    partner: "verfiy me",
    image: veriftyme,
  },
  { partner: "wooven", image: wooven },
  { partner: "nimc", image: nimc },
  { partner: "paystack", image: paystack },
];

const TrustedPartners = ({ marginBottom }: { marginBottom: string }) => {
  return (
    <Container marginBottom={marginBottom}>
      <div className="text-center text-brandGray-300 border-y py-[42px] border-[#B7DCBE]">
        <div className=" mb-6">
          <Typography as="h3" font="font-gordita-bold">
            Trusted Partners
          </Typography>
        </div>
        <div className=" mb-[46px]">
          <Typography as="p" font="font-gordita-regular">
            The people we rely on to ensure you have a quality experience
            driving with us
          </Typography>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[72px] justify-center">
          {trustedPartners.map((trustedPartner) => {
            return (
              <div key={trustedPartner.partner}>
                <Image
                  src={trustedPartner.image}
                  alt={trustedPartner.partner}
                  width={206}
                  height={56}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default TrustedPartners;
